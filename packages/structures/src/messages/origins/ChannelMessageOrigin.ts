import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { createChat } from '../../chats/index.js';
import { Structure } from '../../Structure.js';

export class ChannelMessageOrigin extends BaseMessageOrigin<MessageOriginType.Channel> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat);
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id;
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public isChannel(): this is ChannelMessageOrigin {
		return true;
	}
}
