import { ChatType } from '@telescript/api-types';
import { TitleableChatMixin, UsernameableChatMixin } from './mixins/index.js';
import { BaseChat } from './BaseChat.js';
import type { Resolve } from '../registry.js';

export interface ChannelChat extends TitleableChatMixin<ChatType.Channel>, UsernameableChatMixin<ChatType.Channel> {}

export class ChannelChat extends BaseChat<ChatType.Channel> {
	static {
		this.mixin(TitleableChatMixin, UsernameableChatMixin);
	}

	public isChannel(): this is Resolve<'ChannelChat'> {
		return true;
	}
}
