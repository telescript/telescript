import { createStructure, type Resolve } from '../registry.js';
import { APIOrderInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class OrderInfo extends Structure<APIOrderInfo> {
	public get name() {
		return this[Structure.DataProperty].name ?? null;
	}

	public get phoneNumber() {
		return this[Structure.DataProperty].phone_number ?? null;
	}

	public get email() {
		return this[Structure.DataProperty].email ?? null;
	}

	public get shippingAddress(): Resolve<'ShippingAddress'> | null {
		const data = this[Structure.DataProperty].shipping_address;
		return data ? createStructure(this[Structure.OwnerProperty], 'ShippingAddress', data) : null;
	}
}
