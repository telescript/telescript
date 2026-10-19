import { createStructure, type Resolve } from '../../registry.js';
import { APIChatBoostSourceGiveaway, ChatBoostSourceSource } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatBoostSource } from './BaseChatBoostSource.js';

export class GiveawayChatBoostSource extends BaseChatBoostSource<
	ChatBoostSourceSource.Giveaway,
	APIChatBoostSourceGiveaway
> {
	public isGiveaway(): this is Resolve<'GiveawayChatBoostSource'> {
		return true;
	}

	public get giveawayMessageId() {
		return this[Structure.DataProperty].giveaway_message_id;
	}

	public get user(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get prizeStarCount() {
		return this[Structure.DataProperty].prize_star_count ?? null;
	}

	public get isUnclaimed() {
		return this[Structure.DataProperty].is_unclaimed ?? false;
	}
}
