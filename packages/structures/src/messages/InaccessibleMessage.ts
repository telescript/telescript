import { APIInaccessibleMessage } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import type { Resolve } from '../registry.js';

export class InaccessibleMessage extends Structure<APIInaccessibleMessage> {
	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
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

	public isInaccessible(): this is Resolve<'InaccessibleMessage'> {
		return true;
	}
}
