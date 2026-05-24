import { Core } from '@telescript/core';
import EventEmitter from 'node:events';
import { ChatRepository, MessageRepository, UserRepository } from '../repositories/index.js';
import { processUpdate } from './updates/index.js';
import type { Requester, UpdateTransport } from '@telescript/spec';
import { ClientUser } from '../structures/index.js';

export interface ClientOptions {
	requester: Requester;
	updateTransport: UpdateTransport;
}

export class Client extends EventEmitter {
	public requester: Requester;

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

export * from './Client.js';
