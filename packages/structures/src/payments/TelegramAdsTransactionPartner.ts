import type { Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';

export class TelegramAdsTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.TelegramAds> {
	public isTelegramAds(): this is Resolve<'TelegramAdsTransactionPartner'> {
		return true;
	}
}
