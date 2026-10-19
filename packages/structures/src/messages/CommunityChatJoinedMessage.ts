import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class CommunityChatJoinedMessage extends BaseMessage<MessageType.CommunityChatJoined> {
	public get communityChatJoined(): Resolve<'CommunityChatJoined'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'CommunityChatJoined',
			this[Structure.DataProperty].community_chat_joined,
		);
	}

	public get type(): MessageType.CommunityChatJoined {
		return MessageType.CommunityChatJoined;
	}

	public isCommunityChatJoined(): this is Resolve<'CommunityChatJoinedMessage'> {
		return true;
	}
}
