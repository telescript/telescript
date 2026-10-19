import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChatSharedMessage extends BaseMessage<MessageType.ChatShared> {
	public get chatShared(): Resolve<'ChatShared'> {
		return createStructure(this[Structure.OwnerProperty], 'ChatShared', this[Structure.DataProperty].chat_shared);
	}

	public get type(): MessageType.ChatShared {
		return MessageType.ChatShared;
	}

	public isChatShared(): this is Resolve<'ChatSharedMessage'> {
		return true;
	}
}
