import { APIErrorResponse } from '@telescript/api-types';

export class TelegramAPIError extends Error {
	public code: number;

	public constructor(public cause: APIErrorResponse) {
		super(cause.description);
		this.code = cause.error_code;
	}
}
