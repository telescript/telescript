import { APIRefundedPayment } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class RefundedPayment extends Structure<APIRefundedPayment> {
	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get totalAmount() {
		return this[Structure.DataProperty].total_amount;
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get telegramPaymentChargeId() {
		return this[Structure.DataProperty].telegram_payment_charge_id;
	}

	public get providerPaymentChargeId() {
		return this[Structure.DataProperty].provider_payment_charge_id ?? null;
	}
}
