import type { Requester } from '@telescript/spec';
import { API } from './API.js';

export interface CoreOptions {
	requester: Requester;
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
