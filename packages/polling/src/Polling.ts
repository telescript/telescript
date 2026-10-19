import { APIMethod } from '@telescript/api-types';
import { DefaultPollingOptions } from './constants.js';
import { setTimeout } from 'node:timers/promises';
import type { Requester, UpdateTransport } from '@telescript/spec';

export interface PollingOptions {
	/**
	 * How long Telegram may hold a `getUpdates` request open when there are no updates, in seconds.
	 */
	timeout: number;
	/**
	 * The wait after a failed `getUpdates` before trying again, in milliseconds; it doubles with every failure in a row,
	 * up to `maxRetryDelay`.
	 */
	retryDelay: number;
	maxRetryDelay: number;
}

export class Polling implements UpdateTransport {
	public options: PollingOptions;

	#controller = new AbortController();

	public constructor(
		public requester: Requester,
		options?: Partial<PollingOptions>,
	) {
		this.options = { ...DefaultPollingOptions, ...options };
	}

	/**
	 * Ends the iteration: the pending `getUpdates` request is aborted.
	 */
	public stop() {
		this.#controller.abort();
	}

	public async *[Symbol.asyncIterator]() {
		// A stopped transport can be iterated again.
		if (this.#controller.signal.aborted) this.#controller = new AbortController();
		const signal = this.#controller.signal;

		let offset: number | undefined = undefined;
		let failures = 0;

		while (!signal.aborted) {
			let updates: APIMethod.GetUpdates.Result;
			try {
				updates = (await this.requester.request(
					APIMethod.GetUpdates,
					{ offset, timeout: this.options.timeout },
					{ signal, timeout: this.options.timeout * 1000 },
				)) as APIMethod.GetUpdates.Result;
			} catch (error) {
				if (signal.aborted) return;
				if (!isTransient(error)) throw error;

				const delay = Math.min(this.options.retryDelay * 2 ** failures, this.options.maxRetryDelay);
				failures++;
				try {
					await setTimeout(delay, undefined, { signal });
				} catch {
					return;
				}
				continue;
			}

			failures = 0;
			for (const update of updates) {
				yield update;
			}

			const lastUpdate = updates.at(-1);
			if (lastUpdate) {
				offset = lastUpdate.update_id + 1;
			}
		}
	}
}

/**
 * Whether polling should try again after `error`. Network failures, timeouts, server errors and rate limits pass;
 * other Telegram errors never fix themselves (e.g. 401 Unauthorized for a wrong token, 409 Conflict with another
 * `getUpdates` or a webhook). Checked by name: polling doesn't depend on a requester implementation.
 */
function isTransient(error: unknown) {
	if (!(error instanceof Error) || error.name !== 'TelegramAPIError') return true;
	const code = (error as Error & { code?: unknown }).code;
	return typeof code === 'number' && (code >= 500 || code === 429);
}
