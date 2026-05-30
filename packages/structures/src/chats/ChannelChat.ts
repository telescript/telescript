import { ChatType } from '@telescript/api-types';
import { Mixin } from '../Mixin.js';
import { TitleableChatMixin, UsernameableChatMixin } from './mixins/index.js';
import { Chat } from './Chat.js';

export interface ChannelChat extends TitleableChatMixin<ChatType.Channel>, UsernameableChatMixin<ChatType.Channel> {}

export class ChannelChat extends Chat<ChatType.Channel> {
	public isChannel(): this is ChannelChat {
		return true;
	}
}

Mixin(ChannelChat, TitleableChatMixin, UsernameableChatMixin);
