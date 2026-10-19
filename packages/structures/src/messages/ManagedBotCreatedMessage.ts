import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ManagedBotCreatedMessage extends BaseMessage<MessageType.ManagedBotCreated> {
	public get managedBotCreated(): Resolve<'ManagedBotCreated'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ManagedBotCreated',
			this[Structure.DataProperty].managed_bot_created,
		);
	}

	public get type(): MessageType.ManagedBotCreated {
		return MessageType.ManagedBotCreated;
	}

	public isManagedBotCreated(): this is Resolve<'ManagedBotCreatedMessage'> {
		return true;
	}
}
