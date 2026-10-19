import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChatBoostAddedMessage extends BaseMessage<MessageType.ChatBoostAdded> {
	public get boostAdded(): Resolve<'ChatBoostAdded'> {
		return createStructure(this[Structure.OwnerProperty], 'ChatBoostAdded', this[Structure.DataProperty].boost_added);
	}

	public get type(): MessageType.ChatBoostAdded {
		return MessageType.ChatBoostAdded;
	}

	public isChatBoostAdded(): this is Resolve<'ChatBoostAddedMessage'> {
		return true;
	}
}
