import { Core } from '@telescript/core';
import { Polling } from '@telescript/polling';
import { Requester } from '@telescript/requester';
import EventEmitter from 'node:events';
import { ChatRepository } from '../repositories/ChatRepository.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { UserRepository } from '../repositories/UserRepository.js';
import { processUpdate } from './updates/index.js';
import type { UpdateTransport } from '@telescript/spec';

export interface ClientOptions {
	token: string;
}

export class Client extends EventEmitter {
	public requester: Requester;

	public core: Core;

	public transport: UpdateTransport;

	public chats = new ChatRepository(this);

	public messages = new MessageRepository(this);

	public users = new UserRepository(this);

	public constructor(options: ClientOptions) {
		super();
		this.requester = new Requester({ token: options.token });
		this.core = new Core({ requester: this.requester });
		this.transport = new Polling(this.requester);
	}

	public async start() {
		for await (const update of this.transport) {
			processUpdate(this, update);
		}
	}
}
