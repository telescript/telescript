export interface APIOkResponse<Result> {
	ok: true;
	result: Result;
}

export interface APIErrorResponse {
	ok: false;
	description: string;
	error_code: number;
	parameters?: APIResponseParameters;
}

export interface APIResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}

export type APIResponse<Result> = APIOkResponse<Result> | APIErrorResponse;
