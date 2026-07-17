import { APIGiveaway } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createChat } from '../../chats/index.js';

export class Giveaway extends Structure<APIGiveaway> {
	public get chats() {
		return this[Structure.DataProperty].chats.map((data) => createChat(data));
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

	public get onlyNewMembers() {
		return this[Structure.DataProperty].only_new_members ?? null;
	}

	public get hasPublicWinners() {
		return this[Structure.DataProperty].has_public_winners ?? null;
	}

	public get prizeDescription() {
		return this[Structure.DataProperty].prize_description ?? null;
	}

	public get countryCodes() {
		return this[Structure.DataProperty].country_codes ?? null;
	}

	public get prizeStarCount() {
		return this[Structure.DataProperty].prize_star_count ?? null;
	}

	public get premiumSubscriptionMonthCount() {
		return this[Structure.DataProperty].premium_subscription_month_count ?? null;
	}
}
