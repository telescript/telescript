import { APIMessage } from '@telescript/api-types';
import { Structure } from './Structure.js';
import { User } from './User.js';
import { Chat } from './Chat.js';

export class Message extends Structure<APIMessage> {
	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get from() {
		const from = this[Structure.DataProperty].from;
		return from ? new User(this.client, from) : null;
	}

	public get date() {
		return this[Structure.DataProperty].date;
	}

	public get chat() {
		return new Chat(this.client, this[Structure.DataProperty].chat);
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}
}
