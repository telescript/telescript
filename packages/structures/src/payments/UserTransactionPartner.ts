import { createStructure, type Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { Structure } from '../Structure.js';
import { createPaidMedia } from '../media/paid/index.js';

export class UserTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.User> {
	public get transactionType() {
		return this[Structure.DataProperty].transaction_type;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public get affiliate(): Resolve<'AffiliateInfo'> | null {
		const data = this[Structure.DataProperty].affiliate;
		return data ? createStructure(this[Structure.OwnerProperty], 'AffiliateInfo', data) : null;
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload ?? null;
	}

	public get subscriptionPeriod() {
		return this[Structure.DataProperty].subscription_period ?? null;
	}

	public get paidMedia() {
		const data = this[Structure.DataProperty].paid_media;
		return data ? data.map((item) => createPaidMedia(item, this[Structure.OwnerProperty])) : null;
	}

	public get paidMediaPayload() {
		return this[Structure.DataProperty].paid_media_payload ?? null;
	}

	public get gift(): Resolve<'Gift'> | null {
		const data = this[Structure.DataProperty].gift;
		return data ? createStructure(this[Structure.OwnerProperty], 'Gift', data) : null;
	}

	public get premiumSubscriptionDuration() {
		return this[Structure.DataProperty].premium_subscription_duration ?? null;
	}

	public isUser(): this is Resolve<'UserTransactionPartner'> {
		return true;
	}
}
