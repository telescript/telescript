import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class CommunityChatRemovedMessage extends BaseMessage<MessageType.CommunityChatRemoved> {
	public get communityChatRemoved(): Resolve<'CommunityChatRemoved'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'CommunityChatRemoved',
			this[Structure.DataProperty].community_chat_removed,
		);
	}

	public get type(): MessageType.CommunityChatRemoved {
		return MessageType.CommunityChatRemoved;
	}

	public isCommunityChatRemoved(): this is Resolve<'CommunityChatRemovedMessage'> {
		return true;
	}
}
