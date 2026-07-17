import { ShippingAddress as ParentShippingAddress } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIShippingAddress } from '@telescript/api-types';

export interface ShippingAddress extends ParentShippingAddress {}

export class ShippingAddress extends ParentShippingAddress {
	public constructor(
		public client: Client,
		data: APIShippingAddress,
	) {
		super(data);
	}
}
