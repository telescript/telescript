import { createStructure, type Resolve } from '../../registry.js';
import { APIChatBoostSourceGiftCode, ChatBoostSourceSource } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatBoostSource } from './BaseChatBoostSource.js';

export class GiftCodeChatBoostSource extends BaseChatBoostSource<
	ChatBoostSourceSource.GiftCode,
	APIChatBoostSourceGiftCode
> {
	public isGiftCode(): this is Resolve<'GiftCodeChatBoostSource'> {
		return true;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}
}
