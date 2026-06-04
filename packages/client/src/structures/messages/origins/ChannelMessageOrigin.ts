import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { ChannelMessageOrigin as ParentChannelMessageOrigin, Structure } from '@telescript/structures';

export interface ChannelMessageOrigin extends ParentChannelMessageOrigin {}

export class ChannelMessageOrigin extends BaseMessageOrigin<MessageOriginType.Channel> {
	static {
		this.mixin(ParentChannelMessageOrigin);
	}

	public get chat() {
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}
}
