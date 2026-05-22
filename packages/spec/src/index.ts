import { APIUpdate } from '@telescript/api-types';

export interface Requester {
  request(method: string, params?: Record<string, unknown>): Promise<unknown>;
}

export interface UpdateTransport {
  [Symbol.asyncIterator](): AsyncIterableIterator<APIUpdate>;
}
