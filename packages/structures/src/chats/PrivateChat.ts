import { ChatType } from '@telescript/api-types';
import { UsernameableChatMixin } from './mixins/index.js';
import { Structure } from '../Structure.js';
import { BaseChat } from './BaseChat.js';
import type { Resolve } from '../registry.js';

export interface PrivateChat extends UsernameableChatMixin<ChatType.Private> {}

export class PrivateChat extends BaseChat<ChatType.Private> {
	static {
		this.mixin(UsernameableChatMixin);
	}

	public isPrivate(): this is Resolve<'PrivateChat'> {
		return true;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}
}
