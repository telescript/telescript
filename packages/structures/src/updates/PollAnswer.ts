import { createStructure, type Resolve } from '../registry.js';
import { APIPollAnswer } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class PollAnswer extends Structure<APIPollAnswer> {
	public get pollId() {
		return this[Structure.DataProperty].poll_id;
	}

	public get voterChat() {
		const data = this[Structure.DataProperty].voter_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get user(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get optionIds() {
		return this[Structure.DataProperty].option_ids;
	}

	public get optionPersistentIds() {
		return this[Structure.DataProperty].option_persistent_ids;
	}
}
