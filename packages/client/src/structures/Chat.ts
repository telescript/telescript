import { APIChat } from '@telescript/api-types';
import { Structure } from './Structure.js';

export class Chat extends Structure<APIChat> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name ?? null;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get isForum() {
		return this[Structure.DataProperty].is_forum ?? false;
	}

	public get isDirectMessages() {
		return this[Structure.DataProperty].is_direct_messages ?? false;
	}

	public sendText(text: string) {
		return this.client.chats.sendText(this.id, text);
	}
}
