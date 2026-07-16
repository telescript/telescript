import { Message as ParentMessage, Structure } from '@telescript/structures';
import { DirectMessagesTopic } from './DirectMessagesTopic.js';
import { Client } from '../../client/index.js';
import { APIMessage } from '@telescript/api-types';
import { createMessageOrigin } from './origins/index.js';

export class Message extends ParentMessage {
	public constructor(
		public client: Client,
		data: APIMessage,
	) {
		super(data);
	}

	public get directMessagesTopic() {
		const data = this[Structure.DataProperty].direct_messages_topic;
		return data ? new DirectMessagesTopic(this.client, data) : null;
	}

	public get from() {
		const data = this[Structure.DataProperty].from;
		return data ? this.client.users.resolve(data) : null;
	}

	public get senderChat() {
		const data = this[Structure.DataProperty].sender_chat;
		return data ? this.client.chats.resolve(data) : null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? this.client.users.resolve(data) : null;
	}

	public get receiverUser() {
		const data = this[Structure.DataProperty].receiver_user;
		return data ? this.client.users.resolve(data) : null;
	}

	public get chat() {
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}

	public get forwardOrigin() {
		const data = this[Structure.DataProperty].forward_origin;
		return data ? createMessageOrigin(this.client, data) : null;
	}

	public get replyToMessage(): Message | null {
		const data = this[Structure.DataProperty].reply_to_message;
		return data ? this.client.messages.resolve(data) : null;
	}

	public get guestBotCallerUser() {
		const data = this[Structure.DataProperty].guest_bot_caller_user;
		return data ? this.client.users.resolve(data) : null;
	}

	public get guestBotCallerChat() {
		const data = this[Structure.DataProperty].guest_bot_caller_chat;
		return data ? this.client.chats.resolve(data) : null;
	}

	public get pinnedMessage(): Message | null {
		const data = this[Structure.DataProperty].pinned_message;
		return data ? this.client.messages.resolve(data as APIMessage) : null;
	}

	public get leftChatMember() {
		const data = this[Structure.DataProperty].left_chat_member;
		return data ? this.client.users.resolve(data) : null;
	}

	public get newChatMembers() {
		const data = this[Structure.DataProperty].new_chat_members;
		return data ? data.map((member) => this.client.users.resolve(member)) : null;
	}
}
