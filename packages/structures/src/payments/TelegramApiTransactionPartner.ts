import type { Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { Structure } from '../Structure.js';

export class TelegramApiTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.TelegramApi> {
	public get requestCount() {
		return this[Structure.DataProperty].request_count;
	}

	public isTelegramApi(): this is Resolve<'TelegramApiTransactionPartner'> {
		return true;
	}
}
