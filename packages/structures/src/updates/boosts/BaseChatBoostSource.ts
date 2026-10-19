import type { Resolve } from '../../registry.js';
import { APIChatBoostSource, ChatBoostSourceSource } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BaseChatBoostSource<
	Source extends ChatBoostSourceSource,
	Data extends Extract<APIChatBoostSource, { source: Source }> = Extract<APIChatBoostSource, { source: Source }>,
> extends Structure<Data> {
	public get source() {
		return this[Structure.DataProperty].source;
	}

	public isPremium(): this is Resolve<'PremiumChatBoostSource'> {
		return false;
	}

	public isGiftCode(): this is Resolve<'GiftCodeChatBoostSource'> {
		return false;
	}

	public isGiveaway(): this is Resolve<'GiveawayChatBoostSource'> {
		return false;
	}
}
