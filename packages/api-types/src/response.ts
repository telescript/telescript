export interface OkResponse<Result> {
	ok: true;
	result: Result;
}

export interface ErrorResponse {
	ok: false;
	description: string;
	error_code: number;
	parameters?: ResponseParameters;
}

export interface ResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}

export type Response<Result> = OkResponse<Result> | ErrorResponse;
