import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class SupergroupChatCreatedMessage extends BaseMessage<MessageType.SupergroupChatCreated> {
	public get supergroupChatCreated() {
		return this[Structure.DataProperty].supergroup_chat_created;
	}

	public get type(): MessageType.SupergroupChatCreated {
		return MessageType.SupergroupChatCreated;
	}

	public isSupergroupChatCreated(): this is Resolve<'SupergroupChatCreatedMessage'> {
		return true;
	}
}
