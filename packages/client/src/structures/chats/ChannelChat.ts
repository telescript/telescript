import { ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { ChannelChat as ParentChannelChat } from '@telescript/structures';

export interface ChannelChat extends ParentChannelChat {}

export class ChannelChat extends BaseChat<ChatType.Channel> {
	static {
		this.mixin(ParentChannelChat);
	}
}
