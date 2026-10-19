import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChatBackgroundSetMessage extends BaseMessage<MessageType.ChatBackgroundSet> {
	public get chatBackgroundSet(): Resolve<'ChatBackground'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ChatBackground',
			this[Structure.DataProperty].chat_background_set,
		);
	}

	public get type(): MessageType.ChatBackgroundSet {
		return MessageType.ChatBackgroundSet;
	}

	public isChatBackgroundSet(): this is Resolve<'ChatBackgroundSetMessage'> {
		return true;
	}
}
