import { APIErrorResponse, APIResponse } from '@telescript/api-types';
import type { Requester as RequesterSpec } from '@telescript/spec';
import { DefaultRequesterOptions } from './constants.js';
import { setTimeout } from 'node:timers/promises';
import { HTTPError, TelegramAPIError } from './errors/index.js';

export interface RequesterOptions {
	api: string;
	maxRetries: number;
	retryAfter: number;
}

export class Requester implements RequesterSpec {
	#token: string;

	public options: RequesterOptions;

	constructor(token: string, options?: Partial<RequesterOptions>) {
		this.#token = token;
		this.options = { ...DefaultRequesterOptions, ...options };
	}

	public async request(method: string, params?: Record<string, unknown>): Promise<unknown> {
		const url = `${this.options.api}/bot${this.#token}/${method}`;

		const res = await this.fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params ?? {}),
		});

		const data = (await res.json()) as APIResponse<unknown>;

		if (!data.ok) {
			throw new TelegramAPIError(data);
		}

		return data.result;
	}

	private async fetch(url: string, init: RequestInit, retries = 0): Promise<Response> {
		const res = await fetch(url, init);

		const status = res.status;
		if (status >= 200 && status < 300) {
			return res;
		} else if (status === 429) {
			const data = (await res.json()) as APIErrorResponse;

			let retryAfter = data.parameters?.retry_after;
			if (retryAfter) retryAfter *= 1000;
			retryAfter ??= this.options.retryAfter;

			await setTimeout(retryAfter);
			return await this.fetch(url, init, retries);
		} else if (status >= 500 && status < 600) {
			if (retries >= this.options.maxRetries) throw new HTTPError(res);
			return await this.fetch(url, init, ++retries);
		}

		return res;
	}
}
