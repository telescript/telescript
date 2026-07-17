import { SuccessfulPayment as ParentSuccessfulPayment, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APISuccessfulPayment } from '@telescript/api-types';
import { OrderInfo } from './OrderInfo.js';

export interface SuccessfulPayment extends ParentSuccessfulPayment {}

export class SuccessfulPayment extends ParentSuccessfulPayment {
	public constructor(
		public client: Client,
		data: APISuccessfulPayment,
	) {
		super(data);
	}

	public get orderInfo() {
		const data = this[Structure.DataProperty].order_info;
		return data ? new OrderInfo(this.client, data) : null;
	}
}
