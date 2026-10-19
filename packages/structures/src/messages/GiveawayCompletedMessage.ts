import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiveawayCompletedMessage extends BaseMessage<MessageType.GiveawayCompleted> {
	public get giveawayCompleted(): Resolve<'GiveawayCompleted'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'GiveawayCompleted',
			this[Structure.DataProperty].giveaway_completed,
		);
	}

	public get type(): MessageType.GiveawayCompleted {
		return MessageType.GiveawayCompleted;
	}

	public isGiveawayCompleted(): this is Resolve<'GiveawayCompletedMessage'> {
		return true;
	}
}
