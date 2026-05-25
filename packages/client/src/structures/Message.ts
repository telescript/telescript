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
		return this[Structure.DataProperty].sender_boost_count ?? null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? this.client.users.resolve(data) : null;
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
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}

	public get editUnixTimestamp() {
		return this[Structure.DataProperty].edit_date ?? null;
	}

	public get editTimestamp() {
		const ts = this.editUnixTimestamp;
		return ts ? ts * 1000 : null;
	}

	public get editDate() {
		const ts = this.editTimestamp;
		return ts ? new Date(ts) : null;
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}
}
