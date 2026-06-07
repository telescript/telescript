import { APIErrorResponse } from '@telescript/api-types';

export class TelegramAPIError extends Error {
	public code: number;

	public constructor(data: APIErrorResponse) {
		super(data.description, { cause: data });
		this.code = data.error_code;
	}
}
