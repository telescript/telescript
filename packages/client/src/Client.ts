import { isMessageUpdate, Update } from '@telescript/api-types';
import { Core } from '@telescript/core';
import { Polling } from '@telescript/polling';
import { Requester } from '@telescript/requester';
import EventEmitter from 'node:events';
import { ChatRepository } from './repositories/ChatRepository.js';
import { MessageRepository } from './repositories/MessageRepository.js';
import { UserRepository } from './repositories/UserRepository.js';

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

	public chats = new ChatRepository(this);

	public messages = new MessageRepository(this);

	public users = new UserRepository(this);

	public constructor(options: ClientOptions) {
		super();
		this.requester = new Requester({ token: options.token });
		this.core = new Core({ requester: this.requester });
		this.transport = new Polling({ requester: this.requester });
	}

	public async start() {
		for await (const update of this.transport) {
			if (isMessageUpdate(update)) {
				const message = this.messages.resolve(update.message);
				this.emit('message', message);
			}
		}
	}
}
