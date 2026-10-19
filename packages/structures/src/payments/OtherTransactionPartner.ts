import type { Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';

export class OtherTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.Other> {
	public isOther(): this is Resolve<'OtherTransactionPartner'> {
		return true;
	}
}
