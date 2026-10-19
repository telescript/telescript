import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class NewChatTitleMessage extends BaseMessage<MessageType.NewChatTitle> {
	public get newChatTitle() {
		return this[Structure.DataProperty].new_chat_title;
	}

	public get type(): MessageType.NewChatTitle {
		return MessageType.NewChatTitle;
	}

	public isNewChatTitle(): this is Resolve<'NewChatTitleMessage'> {
		return true;
	}
}
