import { Core } from '@telescript/core';
import EventEmitter from 'node:events';
import { ChatRepository, MessageRepository, UserRepository } from '../repositories/index.js';
import { processUpdate } from './updates/index.js';
import type { Requester, UpdateTransport } from '@telescript/spec';
import { ClientUser, Message } from '../structures/index.js';

export enum ClientEvent {
	Message = 'message',
	EditedMessage = 'editedMessage',
	ChannelPost = 'channelPost',
	EditedChannelPost = 'editedChannelPost',
	BusinessMessage = 'businessMessage',
	EditedBusinessMessage = 'editedBusinessMessage',
	GuestMessage = 'guestMessage',
}

export interface ClientOptions {
	requester: Requester;
	updateTransport: UpdateTransport;
}

export type EventMap = {
	[ClientEvent.Message]: [Message];
	[ClientEvent.EditedMessage]: [Message];
	[ClientEvent.ChannelPost]: [Message];
	[ClientEvent.EditedChannelPost]: [Message];
	[ClientEvent.BusinessMessage]: [Message];
	[ClientEvent.EditedBusinessMessage]: [Message];
	[ClientEvent.GuestMessage]: [Message];
};

export class Client extends EventEmitter<EventMap> {
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
			const upd = processUpdate(this, update);
			if (upd) {
				this.emit(upd[0], ...upd[1]);
			}
		}
	}

	public async getMe() {
		const data = await this.core.api.getMe();
		return new ClientUser(this, data);
	}

	public async logOut() {
		return await this.core.api.logOut();
	}

	public async close() {
		return await this.core.api.close();
	}
}
