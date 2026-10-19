import { ChatType } from '@telescript/api-types';
import { TitleableChatMixin } from './mixins/index.js';
import { BaseChat } from './BaseChat.js';
import type { Resolve } from '../registry.js';

export interface GroupChat extends TitleableChatMixin<ChatType.Group> {}

export class GroupChat extends BaseChat<ChatType.Group> {
	static {
		this.mixin(TitleableChatMixin);
	}

	public isGroup(): this is Resolve<'GroupChat'> {
		return true;
	}
}
