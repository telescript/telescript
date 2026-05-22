import { APIResponse } from '@telescript/api-types';
import type { Requester as RequesterSpec } from '@telescript/spec';
import { DefaultRequesterOptions } from './constants';

export interface RequesterOptions {
	api: string;
	maxRetries: number;
}

export class Requester implements RequesterSpec {
	#token: string;

	public options: RequesterOptions;

	constructor(token: string, options?: Partial<RequesterOptions>) {
		this.#token = token;
		this.options = { ...DefaultRequesterOptions, ...options };
	}

	public async request(method: string, params?: Record<string, unknown>, retries = 0): Promise<unknown> {
		const url = `${this.options.api}/bot${this.#token}/${method}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params ?? {}),
		});

		if (!response.ok) {
			if (retries < this.options.maxRetries) {
				return this.request(method, params, ++retries);
			}

			throw new Error(`HTTPError: ${response.status} ${response.statusText}`);
		}

		const data = (await response.json()) as APIResponse<unknown>;

		if (!data.ok) {
			throw new Error(`TelegramAPIError: ${data.description} (code: ${data.error_code})`);
		}

		return data.result;
	}
}
