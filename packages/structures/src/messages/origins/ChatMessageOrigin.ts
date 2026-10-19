import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './BaseMessageOrigin.js';
import { createChat } from '../../chats/index.js';
import { Structure } from '../../Structure.js';
import type { Resolve } from '../../registry.js';

export class ChatMessageOrigin extends BaseMessageOrigin<MessageOriginType.Chat> {
	public get senderChat() {
		return createChat(this[Structure.DataProperty].sender_chat, this[Structure.OwnerProperty]);
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public isChat(): this is Resolve<'ChatMessageOrigin'> {
		return true;
	}
}
