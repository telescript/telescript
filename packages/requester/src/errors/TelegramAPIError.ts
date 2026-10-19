import { APIErrorResponse } from '@telescript/api-types';

export class TelegramAPIError extends Error {
	public override name = 'TelegramAPIError';

	public code: number;

	declare cause: APIErrorResponse;

	public constructor(data: APIErrorResponse) {
		super(data.description, { cause: data });
		this.code = data.error_code;
	}
}
