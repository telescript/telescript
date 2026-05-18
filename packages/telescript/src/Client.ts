import { Core } from '@telescript/core';
import { Requester } from '@telescript/requester';

export interface ClientOptions {
	token: string;
}

export class Client {
	public requester: Requester;

	public core: Core;

	public constructor(options: ClientOptions) {
		this.requester = new Requester({ token: options.token });
		this.core = new Core({ requester: this.requester });
	}
}
