import { ChatType } from '@telescript/api-types';
import { TitleableChatMixin } from './mixins/index.js';
import { Chat } from './Chat.js';

export interface GroupChat extends TitleableChatMixin<ChatType.Group> {}

export class GroupChat extends Chat<ChatType.Group> {
	static {
		this.mixin(TitleableChatMixin);
	}

	public isGroup(): this is GroupChat {
		return true;
	}
}
