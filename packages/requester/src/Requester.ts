import { APIErrorResponse, APIResponse } from '@telescript/api-types';
import type { Requester as RequesterSpec, RequestOptions as RequestOptionsSpec } from '@telescript/spec';
import { DefaultRequesterOptions } from './constants.js';
import { setTimeout } from 'node:timers/promises';
import { HTTPError, TelegramAPIError } from './errors/index.js';

export interface RequesterOptions {
	api: string;
	/**
	 * How many times a request is retried after a server error (5xx) or a network failure.
	 */
	maxHttpErrorRetries: number;
	/**
	 * How many times a request is retried after Telegram answers 429 Too Many Requests.
	 */
	maxRateLimitRetries: number;
	/**
	 * The wait before retrying after a 429 without `retry_after`, in milliseconds.
	 */
	retryOnRateLimitedAfter: number;
	/**
	 * The wait before the first retry after a server error or network failure, in milliseconds; it doubles with every
	 * retry.
	 */
	retryBaseDelay: number;
	/**
	 * How long one attempt may take, in milliseconds. Long polling adds its own timeout on top.
	 */
	timeout: number;
}

export interface RequestOptions extends RequestOptionsSpec {}

export class Requester implements RequesterSpec {
	#token: string;

	public options: RequesterOptions;

	constructor(token: string, options?: Partial<RequesterOptions>) {
		this.#token = token;
		this.options = { ...DefaultRequesterOptions, ...options };
	}

	public async request(method: string, params?: object, options?: RequestOptions): Promise<unknown> {
		const url = `${this.options.api}/bot${this.#token}/${method}`;

		let body;
		let headers = {};
		if (params) {
			if (options?.asFormData) {
				const formData = new FormData();
				for (const [key, value] of Object.entries(params)) {
					if (value === undefined || value === null) continue;
					if (typeof value === 'string' || value instanceof Blob) {
						formData.append(key, value);
					} else if (typeof value === 'object') {
						formData.append(key, JSON.stringify(value));
					} else if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
						formData.append(key, String(value));
					}
				}
				body = formData;
			} else {
				body = JSON.stringify(params);
				headers = {
					'Content-Type': 'application/json',
				};
			}
		}

		const res = await this.fetch(url, { method: params ? 'POST' : 'GET', headers, body }, options);

		const data = (await res.json()) as APIResponse<unknown>;

		if (!data.ok) {
			throw new TelegramAPIError(data);
		}

		return data.result;
	}

	private async fetch(
		url: string,
		init: RequestInit,
		options: RequestOptions | undefined,
		httpErrorRetries = 0,
		rateLimitRetries = 0,
	): Promise<Response> {
		const timeout = AbortSignal.timeout(this.options.timeout + (options?.timeout ?? 0));
		const signal = options?.signal ? AbortSignal.any([options.signal, timeout]) : timeout;

		let res: Response;
		try {
			res = await fetch(url, { ...init, signal });
		} catch (error) {
			// Aborted by the caller: never retry.
			if (options?.signal?.aborted) throw error;
			// A network failure or a timeout: retry like a server error.
			if (httpErrorRetries >= this.options.maxHttpErrorRetries) throw error;
			await this.wait(this.options.retryBaseDelay * 2 ** httpErrorRetries, options);
			return this.fetch(url, init, options, httpErrorRetries + 1, rateLimitRetries);
		}

		if (res.ok) return res;

		const status = res.status;
		if (status === 429 && rateLimitRetries < this.options.maxRateLimitRetries) {
			const data = (await res.json()) as APIErrorResponse;
			const retryAfter = data.parameters?.retry_after;
			await this.wait(retryAfter ? retryAfter * 1000 : this.options.retryOnRateLimitedAfter, options);
			return this.fetch(url, init, options, httpErrorRetries, rateLimitRetries + 1);
		} else if (status >= 500 && status < 600) {
			if (httpErrorRetries >= this.options.maxHttpErrorRetries) throw new HTTPError(res);
			await this.wait(this.options.retryBaseDelay * 2 ** httpErrorRetries, options);
			return this.fetch(url, init, options, httpErrorRetries + 1, rateLimitRetries);
		}

		// Other errors (and a 429 out of retries) carry a Telegram error description: `request()` throws it.
		return res;
	}

	private async wait(ms: number, options: RequestOptions | undefined) {
		await setTimeout(ms, undefined, { signal: options?.signal });
	}
}
