import { APIOrderInfo } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { ShippingAddress } from './ShippingAddress.js';

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

	public get shippingAddress() {
		const data = this[Structure.DataProperty].shipping_address;
		return data ? new ShippingAddress(data) : null;
	}
}
