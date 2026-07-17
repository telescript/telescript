import { APIUpdate } from '@telescript/api-types';

export interface RequestOptions {
	asFormData?: boolean;
}

export interface Requester {
	request(method: string, params?: Record<string, unknown>, options?: RequestOptions): Promise<unknown>;
}

export interface UpdateTransport {
	[Symbol.asyncIterator](): AsyncIterableIterator<APIUpdate>;
}
