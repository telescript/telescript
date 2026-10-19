import { createStructure, type Resolve } from '../../registry.js';
import { APIChatBoostSourcePremium, ChatBoostSourceSource } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatBoostSource } from './BaseChatBoostSource.js';

export class PremiumChatBoostSource extends BaseChatBoostSource<
	ChatBoostSourceSource.Premium,
	APIChatBoostSourcePremium
> {
	public isPremium(): this is Resolve<'PremiumChatBoostSource'> {
		return true;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}
}
