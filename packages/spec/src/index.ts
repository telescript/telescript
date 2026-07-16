import { APIUpdate } from '@telescript/api-types';

export interface Requester {
	request(method: string, params?: {}): Promise<unknown>;
}

export interface UpdateTransport {
	[Symbol.asyncIterator](): AsyncIterableIterator<APIUpdate>;
}
