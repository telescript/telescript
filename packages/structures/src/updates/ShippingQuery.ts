import { createStructure, type Resolve } from '../registry.js';
import { APIShippingQuery } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class ShippingQuery extends Structure<APIShippingQuery> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get shippingAddress(): Resolve<'ShippingAddress'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ShippingAddress',
			this[Structure.DataProperty].shipping_address,
		);
	}
}
