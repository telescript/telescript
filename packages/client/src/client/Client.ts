import { Core } from '@telescript/core';
import EventEmitter from 'node:events';
import { ChatRepository, MessageRepository, UserRepository } from '../repositories/index.js';
import { processUpdate } from './updates/index.js';
import type { Requester, UpdateTransport } from '@telescript/spec';
import {
	ClientUser,
	type BotSubscriptionUpdated,
	type BusinessMessagesDeleted,
	type Message,
	type MessageReactionCountUpdated,
	type MessageReactionUpdated,
	type StructureOwner,
} from '@telescript/structures';
import '../structures/registry.js';

export enum ClientEvent {
	Message = 'message',
	EditedMessage = 'editedMessage',
	ChannelPost = 'channelPost',
	EditedChannelPost = 'editedChannelPost',
	BusinessMessage = 'businessMessage',
	EditedBusinessMessage = 'editedBusinessMessage',
	GuestMessage = 'guestMessage',
	DeletedBusinessMessages = 'deletedBusinessMessages',
	MessageReaction = 'messageReaction',
	MessageReactionCount = 'messageReactionCount',
	Subscription = 'subscription',
	/**
	 * A listener threw or an `async` listener rejected. Without a listener for this event, Node.js treats the error as
	 * uncaught.
	 */
	Error = 'error',
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
	[ClientEvent.DeletedBusinessMessages]: [BusinessMessagesDeleted];
	[ClientEvent.MessageReaction]: [MessageReactionUpdated];
	[ClientEvent.MessageReactionCount]: [MessageReactionCountUpdated];
	[ClientEvent.Subscription]: [BotSubscriptionUpdated];
	[ClientEvent.Error]: [unknown];
};

export class Client extends EventEmitter<EventMap> implements StructureOwner {
	public requester: Requester;

	public core: Core;

	public updateTransport: UpdateTransport;

	public chats = new ChatRepository(this);

	public messages = new MessageRepository(this);

	public users = new UserRepository(this);

	public constructor(options: ClientOptions) {
		// Rejections of `async` listeners become `error` events.
		super({ captureRejections: true });
		this.requester = options.requester;
		this.core = new Core({ requester: this.requester });
		this.updateTransport = options.updateTransport;
	}

	/**
	 * Receives updates and emits their events until `stop()`. A listener that throws doesn't stop it: the error is
	 * emitted as {@link ClientEvent.Error}.
	 */
	public async start() {
		for await (const update of this.updateTransport) {
			try {
				const upd = processUpdate(this, update);
				if (upd) {
					this.emit(upd[0], ...upd[1]);
				}
			} catch (error) {
				this.emit(ClientEvent.Error, error);
			}
		}
	}

	/**
	 * Stops receiving updates: `start()` resolves.
	 */
	public stop() {
		this.updateTransport.stop?.();
	}

	public async getMe() {
		const data = await this.core.api.getMe();
		return new ClientUser(data, this);
	}

	public async logOut() {
		return await this.core.api.logOut();
	}

	public async close() {
		return await this.core.api.close();
	}
}
