import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { ChatMessageOrigin as ParentChatMessageOrigin, Structure } from '@telescript/structures';

export interface ChatMessageOrigin extends ParentChatMessageOrigin {}

export class ChatMessageOrigin extends BaseMessageOrigin<MessageOriginType.Chat> {
	static {
		this.mixin(ParentChatMessageOrigin);
	}

	public get senderChat() {
		return this.client.chats.resolve(this[Structure.DataProperty].sender_chat);
	}
}
