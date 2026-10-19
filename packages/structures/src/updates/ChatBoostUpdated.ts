import { createStructure, type Resolve } from '../registry.js';
import { APIChatBoostUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class ChatBoostUpdated extends Structure<APIChatBoostUpdated> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get boost(): Resolve<'ChatBoost'> {
		return createStructure(this[Structure.OwnerProperty], 'ChatBoost', this[Structure.DataProperty].boost);
	}
}
