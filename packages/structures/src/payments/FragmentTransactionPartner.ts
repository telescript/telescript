import type { Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { Structure } from '../Structure.js';
import { createRevenueWithdrawalState } from './index.js';

export class FragmentTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.Fragment> {
	public get withdrawalState() {
		const data = this[Structure.DataProperty].withdrawal_state;
		return data ? createRevenueWithdrawalState(data, this[Structure.OwnerProperty]) : null;
	}

	public isFragment(): this is Resolve<'FragmentTransactionPartner'> {
		return true;
	}
}
