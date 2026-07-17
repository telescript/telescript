import { OrderInfo as ParentOrderInfo, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIOrderInfo } from '@telescript/api-types';
import { ShippingAddress } from './ShippingAddress.js';

export interface OrderInfo extends ParentOrderInfo {}

export class OrderInfo extends ParentOrderInfo {
	public constructor(
		public client: Client,
		data: APIOrderInfo,
	) {
		super(data);
	}

	public get shippingAddress() {
		const data = this[Structure.DataProperty].shipping_address;
		return data ? new ShippingAddress(this.client, data) : null;
	}
}
