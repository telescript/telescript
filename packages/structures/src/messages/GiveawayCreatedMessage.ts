import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiveawayCreatedMessage extends BaseMessage<MessageType.GiveawayCreated> {
	public get giveawayCreated(): Resolve<'GiveawayCreated'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'GiveawayCreated',
			this[Structure.DataProperty].giveaway_created,
		);
	}

	public get type(): MessageType.GiveawayCreated {
		return MessageType.GiveawayCreated;
	}

	public isGiveawayCreated(): this is Resolve<'GiveawayCreatedMessage'> {
		return true;
	}
}
