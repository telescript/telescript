import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class NewChatMembersMessage extends BaseMessage<MessageType.NewChatMembers> {
	public get newChatMembers(): Resolve<'User'>[] {
		return this[Structure.DataProperty].new_chat_members.map((member) =>
			createStructure(this[Structure.OwnerProperty], 'User', member),
		);
	}

	public get type(): MessageType.NewChatMembers {
		return MessageType.NewChatMembers;
	}

	public isNewChatMembers(): this is Resolve<'NewChatMembersMessage'> {
		return true;
	}
}
