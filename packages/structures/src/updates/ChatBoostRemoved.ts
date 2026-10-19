import { APIChatBoostRemoved } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { createChatBoostSource } from './boosts/index.js';

export class ChatBoostRemoved extends Structure<APIChatBoostRemoved> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get boostId() {
		return this[Structure.DataProperty].boost_id;
	}

	public get removeUnixTimestamp() {
		return this[Structure.DataProperty].remove_date;
	}

	public get removeTimestamp() {
		return this.removeUnixTimestamp * 1000;
	}

	public get removeDate() {
		return new Date(this.removeTimestamp);
	}

	public get source() {
		return createChatBoostSource(this[Structure.DataProperty].source, this[Structure.OwnerProperty]);
	}
}
