import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChatOwnerLeftMessage extends BaseMessage<MessageType.ChatOwnerLeft> {
	public get chatOwnerLeft(): Resolve<'ChatOwnerLeft'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ChatOwnerLeft',
			this[Structure.DataProperty].chat_owner_left,
		);
	}

	public get type(): MessageType.ChatOwnerLeft {
		return MessageType.ChatOwnerLeft;
	}

	public isChatOwnerLeft(): this is Resolve<'ChatOwnerLeftMessage'> {
		return true;
	}
}
