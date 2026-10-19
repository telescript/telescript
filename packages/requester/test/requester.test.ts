import { afterEach, describe, expect, it, vi } from 'vitest';
import { HTTPError, Requester, TelegramAPIError } from '../dist/index.js';

const ok = (result: unknown) => Response.json({ ok: true, result });
const failure = (status: number, description: string, parameters?: object) =>
	Response.json({ ok: false, error_code: status, description, parameters }, { status });

function stubFetch(...responses: (Response | Error)[]) {
	const fetch = vi.fn(async () => {
		const next = responses.shift();
		if (!next) throw new Error('no more responses');
		if (next instanceof Error) throw next;
		return next;
	});
	vi.stubGlobal('fetch', fetch);
	return fetch;
}

const fast = { retryBaseDelay: 1, retryOnRateLimitedAfter: 1 };

afterEach(() => {
	vi.unstubAllGlobals();
});

describe('Requester', () => {
	it('returns the result', async () => {
		const fetch = stubFetch(ok({ id: 1 }));

		expect(await new Requester('token').request('getMe')).toEqual({ id: 1 });
		expect(fetch).toHaveBeenCalledWith('https://api.telegram.org/bottoken/getMe', expect.anything());
	});

	it('throws Telegram errors', async () => {
		stubFetch(failure(400, 'Bad Request: chat not found'));

		const error = await new Requester('token').request('sendMessage', {}).catch((error: unknown) => error);

		expect(error).toBeInstanceOf(TelegramAPIError);
		expect(error).toMatchObject({ name: 'TelegramAPIError', code: 400, message: 'Bad Request: chat not found' });
	});

	it('retries server errors and network failures, then succeeds', async () => {
		const fetch = stubFetch(new Response(null, { status: 502 }), new TypeError('fetch failed'), ok(true));

		expect(await new Requester('token', fast).request('getMe')).toBe(true);
		expect(fetch).toHaveBeenCalledTimes(3);
	});

	it('gives up on server errors after maxHttpErrorRetries', async () => {
		const fetch = stubFetch(...Array.from({ length: 3 }, () => new Response(null, { status: 500 })));

		const error = await new Requester('token', { ...fast, maxHttpErrorRetries: 2 })
			.request('getMe')
			.catch((error: unknown) => error);

		expect(error).toBeInstanceOf(HTTPError);
		expect(fetch).toHaveBeenCalledTimes(3);
	});

	it('waits retry_after on 429, and gives up after maxRateLimitRetries', async () => {
		const tooMany = () => failure(429, 'Too Many Requests: retry after 0', { retry_after: 0 });
		const fetch = stubFetch(tooMany(), tooMany(), tooMany());

		const error = await new Requester('token', { ...fast, maxRateLimitRetries: 2 })
			.request('getMe')
			.catch((error: unknown) => error);

		expect(error).toMatchObject({ code: 429 });
		expect(fetch).toHaveBeenCalledTimes(3);
	});

	it('times out a hung request', async () => {
		vi.stubGlobal(
			'fetch',
			vi.fn(
				(_url: string, init: RequestInit) =>
					new Promise((_resolve, reject) => init.signal!.addEventListener('abort', () => reject(init.signal!.reason))),
			),
		);

		const error = await new Requester('token', { timeout: 10, maxHttpErrorRetries: 0 })
			.request('getMe')
			.catch((error: unknown) => error);

		expect(error).toMatchObject({ name: 'TimeoutError' });
	});

	it('never retries a request aborted by the caller', async () => {
		const fetch = vi.fn((_url: string, init: RequestInit) => {
			const error = init.signal!.reason as Error;
			return Promise.reject(error);
		});
		vi.stubGlobal('fetch', fetch);
		const controller = new AbortController();
		controller.abort();

		await expect(
			new Requester('token', fast).request('getMe', undefined, { signal: controller.signal }),
		).rejects.toMatchObject({ name: 'AbortError' });
		expect(fetch).toHaveBeenCalledTimes(1);
	});
});
