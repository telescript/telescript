import { Core } from '@telescript/core';
import { Polling, PollingOptions } from '@telescript/polling';
import { Requester, RequesterOptions } from '@telescript/requester';
import EventEmitter from 'node:events';
import { ChatRepository, MessageRepository, UserRepository } from '../repositories/index.js';
import { processUpdate } from './updates/index.js';
import type { Requester as RequesterSpec, UpdateTransport } from '@telescript/spec';
import { ClientUser } from '../structures/index.js';

export interface ClientOptions {
	requester: RequesterSpec;
	updateTransport: UpdateTransport;
}

export class Client extends EventEmitter {
	public requester: RequesterSpec;

	public core: Core;

	public updateTransport: UpdateTransport;

	public chats = new ChatRepository(this);

	public messages = new MessageRepository(this);

	public users = new UserRepository(this);

	public constructor(options: ClientOptions) {
		super();
		this.requester = options.requester;
		this.core = new Core({ requester: this.requester });
		this.updateTransport = options.updateTransport;
	}

	public async start() {
		for await (const update of this.updateTransport) {
			processUpdate(this, update);
		}
	}

	public async getMe() {
		const data = await this.core.api.getMe();
		return new ClientUser(this, data);
	}
}

export interface ClientCreateOptions {
	token: string;
	requester?: Partial<RequesterOptions>;
	polling?: Partial<PollingOptions>;
}

export function createClient(options: ClientCreateOptions) {
	const requester = new Requester(options.token, options.requester);
	const updateTransport = new Polling(requester, options.polling);
	return new Client({ requester, updateTransport });
}
