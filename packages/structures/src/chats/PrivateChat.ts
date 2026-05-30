import { ChatType } from '@telescript/api-types';
import { UsernameableChatMixin } from './mixins/index.js';
import { Structure } from '../Structure.js';
import { Chat } from './Chat.js';

export interface PrivateChat extends UsernameableChatMixin<ChatType.Private> {}

export class PrivateChat extends Chat<ChatType.Private> {
	static {
		this.mixin(UsernameableChatMixin);
	}

	public isPrivate(): this is PrivateChat {
		return true;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}
}
