import { APIErrorResponse, APIResponse } from '@telescript/api-types';
import type { Requester as RequesterSpec } from '@telescript/spec';
import { DefaultRequesterOptions } from './constants.js';
import { setTimeout } from 'node:timers/promises';
import { HTTPError, TelegramAPIError } from './errors/index.js';

export interface RequesterOptions {
	api: string;
	maxHttpErrorRetries: number;
	retryOnRateLimitedAfter: number;
}

export interface RequestOptions {
	asFormData?: boolean;
}

export class Requester implements RequesterSpec {
	#token: string;

	public options: RequesterOptions;

	constructor(token: string, options?: Partial<RequesterOptions>) {
		this.#token = token;
		this.options = { ...DefaultRequesterOptions, ...options };
	}

	public async request(method: string, params?: Record<string, unknown>, options?: RequestOptions): Promise<unknown> {
		const url = `${this.options.api}/bot${this.#token}/${method}`;

		let body;
		if (params) {
			if (options?.asFormData) {
				const formData = new FormData();
				for (const [key, value] of Object.entries(params)) {
					formData.append(key, value);
				}
			} else {
				body = JSON.stringify(params);
			}
		}

		const res = await this.fetch(url, {
			method: params ? 'POST' : 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		});

		const data = (await res.json()) as APIResponse<unknown>;

		if (!data.ok) {
			throw new TelegramAPIError(data);
		}

		return data.result;
	}

	private async fetch(url: string, init: RequestInit, httpErrorRetries = 0): Promise<Response> {
		const res = await fetch(url, init);
		if (res.ok) return res;

		const status = res.status;
		if (status === 429) {
			const data = (await res.json()) as APIErrorResponse;

			let retryAfter = data.parameters?.retry_after;
			if (retryAfter) retryAfter *= 1000;
			retryAfter ??= this.options.retryOnRateLimitedAfter;

			await setTimeout(retryAfter);
			return await this.fetch(url, init, httpErrorRetries);
		} else if (status >= 500 && status < 600) {
			if (httpErrorRetries >= this.options.maxHttpErrorRetries) throw new HTTPError(res);
			return await this.fetch(url, init, ++httpErrorRetries);
		}

		return res;
	}
}
