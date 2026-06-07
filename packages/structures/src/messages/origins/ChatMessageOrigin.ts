import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { createChat } from '../../chats/index.js';
import { Structure } from '../../Structure.js';

export class ChatMessageOrigin extends BaseMessageOrigin<MessageOriginType.Chat> {
	public get senderChat() {
		return createChat(this[Structure.DataProperty].sender_chat);
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public isChat(): this is ChatMessageOrigin {
		return true;
	}
}
