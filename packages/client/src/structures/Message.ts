import { APIMessage } from '@telescript/api-types';
import { Structure } from './Structure.js';
import { DirectMessagesTopic } from './DirectMessagesTopic.js';

export class Message extends Structure<APIMessage> {
	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get threadId() {
		return this[Structure.DataProperty].message_thread_id;
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

	public get senderBoostCount() {
		const data = this[Structure.DataProperty];
		return 'sender_boost_count' in data ? (data.sender_boost_count ?? null) : null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty];
		return 'sender_business_bot' in data && data.sender_business_bot
			? this.client.users.resolve(data.sender_business_bot)
			: null;
	}

	public get senderTag() {
		const data = this[Structure.DataProperty];
		return 'sender_tag' in data ? (data.sender_tag ?? null) : null;
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
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}

	public get editUnixTimestamp() {
		const data = this[Structure.DataProperty];
		return 'edit_date' in data ? (data.edit_date ?? null) : null;
	}

	public get editTimestamp() {
		const ts = this.editUnixTimestamp;
		return ts === null ? null : ts * 1000;
	}

	public get editDate() {
		const ts = this.editTimestamp;
		return ts === null ? null : new Date(ts);
	}

	public get text() {
		const data = this[Structure.DataProperty];
		return 'text' in data ? data.text : null;
	}
}
