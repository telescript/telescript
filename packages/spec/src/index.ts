import { APIUpdate } from '@telescript/api-types';

export interface RequestOptions {
	asFormData?: boolean;
	/**
	 * Aborts the request, including the waits between its retries.
	 */
	signal?: AbortSignal;
	/**
	 * Extra time this request may take on top of the requester's own timeout, in milliseconds (e.g. for long polling).
	 */
	timeout?: number;
}

export interface Requester {
	request(method: string, params?: object, options?: RequestOptions): Promise<unknown>;
}

export interface UpdateTransport {
	[Symbol.asyncIterator](): AsyncIterableIterator<APIUpdate>;
	/**
	 * Stops receiving updates: the iteration ends.
	 */
	stop?(): void;
}
