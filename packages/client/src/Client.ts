import { Update } from '@telescript/api-types';
import { Core } from '@telescript/core';
import { Polling } from '@telescript/polling';
import { Requester } from '@telescript/requester';
import EventEmitter from 'node:events';

export interface ClientOptions {
	token: string;
}

export interface Transport {
	[Symbol.asyncIterator](): AsyncIterableIterator<Update>;
}

export class Client extends EventEmitter {
	public requester: Requester;

	public core: Core;

	public transport: Transport;

	public constructor(options: ClientOptions) {
		super();
		this.requester = new Requester({ token: options.token });
		this.core = new Core({ requester: this.requester });
		this.transport = new Polling({ requester: this.requester });
	}

	public async start() {
		for await (const update of this.transport) {
			const { update_id, ...rest } = update;
			for (const [name, data] of Object.entries(rest)) {
				this.emit(name, data);
			}
		}
	}
}
