import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiveawayMessage extends BaseMessage<MessageType.Giveaway> {
	public get giveaway(): Resolve<'Giveaway'> {
		return createStructure(this[Structure.OwnerProperty], 'Giveaway', this[Structure.DataProperty].giveaway);
	}

	public get type(): MessageType.Giveaway {
		return MessageType.Giveaway;
	}

	public isGiveaway(): this is Resolve<'GiveawayMessage'> {
		return true;
	}
}
