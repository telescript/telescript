import { Core } from '@telescript/core';
import { Polling } from '@telescript/polling';
import { Requester } from '@telescript/requester';
import EventEmitter from 'node:events';
import { ChatRepository } from '../repositories/ChatRepository.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { UserRepository } from '../repositories/UserRepository.js';
import { processUpdate } from './updates/index.js';
import type { Requester as RequesterSpec, UpdateTransport } from '@telescript/spec';

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
}

export interface ClientCreateOptions {
	token: string;
}

export function createClient(options: ClientCreateOptions) {
	const requester = new Requester({ token: options.token });
	const updateTransport = new Polling(requester);
	return new Client({ requester, updateTransport });
}
