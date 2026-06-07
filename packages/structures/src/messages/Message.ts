import { APIMessage } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { DirectMessagesTopic } from './DirectMessagesTopic.js';
import { User } from '../users/index.js';
import { createChat } from '../chats/index.js';
import { createMessageOrigin } from './origins/index.js';

export class Message extends Structure<APIMessage> {
	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get threadId() {
		return this[Structure.DataProperty].message_thread_id ?? null;
	}

	public get directMessagesTopic() {
		const data = this[Structure.DataProperty].direct_messages_topic;
		return data ? new DirectMessagesTopic(data) : null;
	}

	public get from() {
		const data = this[Structure.DataProperty].from;
		return data ? new User(data) : null;
	}

	public get senderChat() {
		const data = this[Structure.DataProperty].sender_chat;
		return data ? createChat(data) : null;
	}

	public get senderBoostCount() {
		return this[Structure.DataProperty].sender_boost_count ?? null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? new User(data) : null;
	}

	public get senderTag() {
		return this[Structure.DataProperty].sender_tag ?? null;
	}

	public get sentUnixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get sentTimestamp() {
		return this.sentUnixTimestamp * 1000;
	}

	public get sentDate() {
		return new Date(this.sentTimestamp);
	}

	public get guestQueryId() {
		return this[Structure.DataProperty].guest_query_id ?? null;
	}

	public get businessConnectionId() {
		return this[Structure.DataProperty].business_connection_id ?? null;
	}

	public get chat() {
		return createChat(this[Structure.DataProperty].chat);
	}

	public get forwardOrigin() {
		const data = this[Structure.DataProperty].forward_origin;
		return data ? createMessageOrigin(data) : null;
	}

	public get isTopicMessage() {
		return this[Structure.DataProperty].is_topic_message ?? false;
	}

	public get isAutomaticForward() {
		return this[Structure.DataProperty].is_automatic_forward ?? null;
	}

	public get replyToMessage(): Message | null {
		const data = this[Structure.DataProperty].reply_to_message;
		return data ? new Message(data) : null;
	}
}
