import type { APIUpdate } from '@telescript/api-types';
import type { Requester, RequestOptions } from '@telescript/spec';
import { describe, expect, it } from 'vitest';
import { Polling } from '../dist/index.js';

/** A requester answering `getUpdates` from `answers` in order: arrays are updates, errors are thrown. */
function fakeRequester(answers: (APIUpdate[] | Error)[]) {
	const calls: { params: unknown; options?: RequestOptions }[] = [];
	const requester: Requester = {
		async request(_method, params, options) {
			calls.push({ params, options });
			const answer = answers.shift();
			if (answer instanceof Error) throw answer;
			if (answer) return answer;
			// Out of answers: hold the long poll until aborted, like Telegram does.
			return new Promise((_resolve, reject) =>
				options?.signal?.addEventListener('abort', () => reject(options.signal!.reason)),
			);
		},
	};
	return { requester, calls };
}

const telegramError = (code: number) => Object.assign(new Error('description'), { name: 'TelegramAPIError', code });
const fast = { retryDelay: 1, maxRetryDelay: 1 };

async function take(polling: Polling, count: number) {
	const received: number[] = [];
	for await (const update of polling) {
		received.push(update.update_id);
		if (received.length === count) polling.stop();
	}
	return received;
}

describe('Polling', () => {
	it('yields updates and confirms them with the next offset', async () => {
		const { requester, calls } = fakeRequester([[{ update_id: 1 }, { update_id: 2 }], [{ update_id: 3 }]]);

		expect(await take(new Polling(requester, fast), 3)).toEqual([1, 2, 3]);
		expect(calls.map((call) => (call.params as { offset?: number }).offset)).toEqual([undefined, 3]);
	});

	it('keeps polling through network failures, server errors and rate limits', async () => {
		const { requester } = fakeRequester([
			new TypeError('fetch failed'),
			telegramError(502),
			telegramError(429),
			[{ update_id: 7 }],
		]);

		expect(await take(new Polling(requester, fast), 1)).toEqual([7]);
	});

	it.each([401, 409])('throws Telegram error %i, which retrying would not fix', async (code) => {
		const { requester } = fakeRequester([telegramError(code)]);

		await expect(take(new Polling(requester, fast), 1)).rejects.toMatchObject({ code });
	});

	it('stops while a long poll is pending', async () => {
		const { requester, calls } = fakeRequester([]);
		const polling = new Polling(requester, fast);

		const iteration = take(polling, 1);
		await new Promise((resolve) => setImmediate(resolve));
		polling.stop();

		expect(await iteration).toEqual([]);
		expect(calls[0]!.options!.signal!.aborted).toBe(true);
	});

	it('gives the request the long poll time on top of its own timeout', async () => {
		const { requester, calls } = fakeRequester([]);
		const polling = new Polling(requester, { ...fast, timeout: 25 });
		const iteration = take(polling, 1);
		await new Promise((resolve) => setImmediate(resolve));
		polling.stop();
		await iteration;

		expect(calls.at(-1)!.options!.timeout).toBe(25_000);
		expect(calls.at(-1)!.params).toMatchObject({ timeout: 25 });
	});
});
