import { createStructure, type Resolve } from '../registry.js';
import { APIAffiliateInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class AffiliateInfo extends Structure<APIAffiliateInfo> {
	public get affiliateUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].affiliate_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get affiliateChat() {
		const data = this[Structure.DataProperty].affiliate_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get commissionPerMille() {
		return this[Structure.DataProperty].commission_per_mille;
	}

	public get amount() {
		return this[Structure.DataProperty].amount;
	}

	public get nanostarAmount() {
		return this[Structure.DataProperty].nanostar_amount ?? null;
	}
}
