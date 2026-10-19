import { createStructure, type Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { Structure } from '../Structure.js';

export class AffiliateProgramTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.AffiliateProgram> {
	public get sponsorUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].sponsor_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get commissionPerMille() {
		return this[Structure.DataProperty].commission_per_mille;
	}

	public isAffiliateProgram(): this is Resolve<'AffiliateProgramTransactionPartner'> {
		return true;
	}
}
