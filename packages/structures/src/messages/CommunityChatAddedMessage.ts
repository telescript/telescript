import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class CommunityChatAddedMessage extends BaseMessage<MessageType.CommunityChatAdded> {
	public get communityChatAdded(): Resolve<'CommunityChatAdded'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'CommunityChatAdded',
			this[Structure.DataProperty].community_chat_added,
		);
	}

	public get type(): MessageType.CommunityChatAdded {
		return MessageType.CommunityChatAdded;
	}

	public isCommunityChatAdded(): this is Resolve<'CommunityChatAddedMessage'> {
		return true;
	}
}
