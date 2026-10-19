import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChatOwnerChangedMessage extends BaseMessage<MessageType.ChatOwnerChanged> {
	public get chatOwnerChanged(): Resolve<'ChatOwnerChanged'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ChatOwnerChanged',
			this[Structure.DataProperty].chat_owner_changed,
		);
	}

	public get type(): MessageType.ChatOwnerChanged {
		return MessageType.ChatOwnerChanged;
	}

	public isChatOwnerChanged(): this is Resolve<'ChatOwnerChangedMessage'> {
		return true;
	}
}
