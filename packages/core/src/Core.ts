import { API } from './API.js';

export interface CoreOptions {
	requester: Requester;
}

export interface Requester {
	request(method: string, params?: Record<string, any>): Promise<unknown>;
}

export class Core {
	public requester: Requester;

	public api: API;

	public constructor(options: CoreOptions) {
		const { requester } = options;
		this.requester = requester;
		this.api = new API(requester);
	}
}
