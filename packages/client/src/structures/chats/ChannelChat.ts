import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { ChannelChat as ParentChannelChat } from '@telescript/structures';

export interface ChannelChat extends ParentChannelChat {}

export class ChannelChat extends Chat<ChatType.Channel> {
	static {
		this.mixin(ParentChannelChat);
	}
}
