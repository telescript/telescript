import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class GroupChatCreatedMessage extends BaseMessage<MessageType.GroupChatCreated> {
	public get groupChatCreated() {
		return this[Structure.DataProperty].group_chat_created;
	}

	public get type(): MessageType.GroupChatCreated {
		return MessageType.GroupChatCreated;
	}

	public isGroupChatCreated(): this is Resolve<'GroupChatCreatedMessage'> {
		return true;
	}
}
