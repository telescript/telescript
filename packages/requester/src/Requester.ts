import { APIResponse } from '@telescript/api-types';
import type { Requester as RequesterSpec } from '@telescript/spec';

export interface RequesterOptions {
	token: string;
}

export class Requester implements RequesterSpec {
	#token: string;

	constructor(options: RequesterOptions) {
		this.#token = options.token;
	}

	public async request(method: string, params?: Record<string, unknown>): Promise<unknown> {
		const url = `https://api.telegram.org/bot${this.#token}/${method}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params ?? {}),
		});

		const data = (await response.json()) as APIResponse<unknown>;

		if (!data.ok) {
			throw new Error(`TelegramAPIError: ${data.description} (code: ${data.error_code})`);
		}

		return data.result;
	}
}
