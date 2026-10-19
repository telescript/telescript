import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './BaseMessageOrigin.js';
import { createChat } from '../../chats/index.js';
import { Structure } from '../../Structure.js';
import type { Resolve } from '../../registry.js';

export class ChannelMessageOrigin extends BaseMessageOrigin<MessageOriginType.Channel> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id;
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public isChannel(): this is Resolve<'ChannelMessageOrigin'> {
		return true;
	}
}
