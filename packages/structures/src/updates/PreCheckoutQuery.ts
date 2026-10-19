import { createStructure, type Resolve } from '../registry.js';
import { APIPreCheckoutQuery } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class PreCheckoutQuery extends Structure<APIPreCheckoutQuery> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get totalAmount() {
		return this[Structure.DataProperty].total_amount;
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get shippingOptionId() {
		return this[Structure.DataProperty].shipping_option_id ?? null;
	}

	public get orderInfo(): Resolve<'OrderInfo'> | null {
		const data = this[Structure.DataProperty].order_info;
		return data ? createStructure(this[Structure.OwnerProperty], 'OrderInfo', data) : null;
	}
}
