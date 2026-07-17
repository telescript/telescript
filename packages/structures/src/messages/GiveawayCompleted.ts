import { APIGiveawayCompleted } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';

export class GiveawayCompleted extends Structure<APIGiveawayCompleted> {
	public get winnerCount() {
		return this[Structure.DataProperty].winner_count;
	}

	public get unclaimedPrizeCount() {
		return this[Structure.DataProperty].unclaimed_prize_count ?? null;
	}

	public get giveawayMessage(): Message | null {
		const data = this[Structure.DataProperty].giveaway_message;
		return data ? new Message(data) : null;
	}

	public get isStarGiveaway() {
		return this[Structure.DataProperty].is_star_giveaway ?? false;
	}
}
