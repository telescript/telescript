import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class LeftChatMemberMessage extends BaseMessage<MessageType.LeftChatMember> {
	public get leftChatMember(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].left_chat_member);
	}

	public get type(): MessageType.LeftChatMember {
		return MessageType.LeftChatMember;
	}

	public isLeftChatMember(): this is Resolve<'LeftChatMemberMessage'> {
		return true;
	}
}
