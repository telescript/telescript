import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiveawayWinnersMessage extends BaseMessage<MessageType.GiveawayWinners> {
	public get giveawayWinners(): Resolve<'GiveawayWinners'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'GiveawayWinners',
			this[Structure.DataProperty].giveaway_winners,
		);
	}

	public get type(): MessageType.GiveawayWinners {
		return MessageType.GiveawayWinners;
	}

	public isGiveawayWinners(): this is Resolve<'GiveawayWinnersMessage'> {
		return true;
	}
}
