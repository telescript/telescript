import { ChatType } from '@telescript/api-types';
import { Mixin } from '../Mixin.js';
import { TitleableChatMixin } from './mixins/index.js';
import { Chat } from './Chat.js';

export interface GroupChat extends TitleableChatMixin<ChatType.Group> {}

export class GroupChat extends Chat<ChatType.Group> {
	public isGroup(): this is GroupChat {
		return true;
	}
}

Mixin(GroupChat, TitleableChatMixin);
