import { APIGiveawayWinners } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { User } from '../users/User.js';

export class GiveawayWinners extends Structure<APIGiveawayWinners> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat);
	}

	public get giveawayMessageId() {
		return this[Structure.DataProperty].giveaway_message_id;
	}

	public get winnersSelectionUnixTimestamp() {
		return this[Structure.DataProperty].winners_selection_date;
	}

	public get winnersSelectionTimestamp() {
		return this.winnersSelectionUnixTimestamp * 1000;
	}

	public get winnersSelectionDate() {
		return new Date(this.winnersSelectionTimestamp);
	}

	public get winnerCount() {
		return this[Structure.DataProperty].winner_count;
	}

	public get winners() {
		return this[Structure.DataProperty].winners.map((data) => new User(data));
	}

	public get additionalChatCount() {
		return this[Structure.DataProperty].additional_chat_count ?? null;
	}

	public get prizeStarCount() {
		return this[Structure.DataProperty].prize_star_count ?? null;
	}

	public get premiumSubscriptionMonthCount() {
		return this[Structure.DataProperty].premium_subscription_month_count ?? null;
	}

	public get unclaimedPrizeCount() {
		return this[Structure.DataProperty].unclaimed_prize_count ?? null;
	}

	public get onlyNewMembers() {
		return this[Structure.DataProperty].only_new_members ?? null;
	}

	public get wasRefunded() {
		return this[Structure.DataProperty].was_refunded ?? null;
	}

	public get prizeDescription() {
		return this[Structure.DataProperty].prize_description ?? null;
	}
}
