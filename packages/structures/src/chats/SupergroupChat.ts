import { ChatType } from '@telescript/api-types';
import { TitleableChatMixin, UsernameableChatMixin } from './mixins/index.js';
import { Structure } from '../Structure.js';
import { BaseChat } from './BaseChat.js';

export interface SupergroupChat
	extends TitleableChatMixin<ChatType.Supergroup>, UsernameableChatMixin<ChatType.Supergroup> {}

export class SupergroupChat extends BaseChat<ChatType.Supergroup> {
	static {
		this.mixin(TitleableChatMixin, UsernameableChatMixin);
	}

	public isSupergroup(): this is SupergroupChat {
		return true;
	}

	public get isForum() {
		return this[Structure.DataProperty].is_forum ?? null;
	}

	public get isDirectMessages() {
		return this[Structure.DataProperty].is_direct_messages ?? null;
	}
}
