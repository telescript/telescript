import { APISuccessfulPayment } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { OrderInfo } from './OrderInfo.js';

export class SuccessfulPayment extends Structure<APISuccessfulPayment> {
	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get totalAmount() {
		return this[Structure.DataProperty].total_amount;
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get subscriptionExpirationDate() {
		return this[Structure.DataProperty].subscription_expiration_date ?? null;
	}

	public get isRecurring() {
		return this[Structure.DataProperty].is_recurring ?? null;
	}

	public get isFirstRecurring() {
		return this[Structure.DataProperty].is_first_recurring ?? null;
	}

	public get shippingOptionId() {
		return this[Structure.DataProperty].shipping_option_id ?? null;
	}

	public get orderInfo() {
		const data = this[Structure.DataProperty].order_info;
		return data ? new OrderInfo(data) : null;
	}

	public get telegramPaymentChargeId() {
		return this[Structure.DataProperty].telegram_payment_charge_id;
	}

	public get providerPaymentChargeId() {
		return this[Structure.DataProperty].provider_payment_charge_id;
	}
}
