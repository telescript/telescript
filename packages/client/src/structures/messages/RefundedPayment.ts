import { RefundedPayment as ParentRefundedPayment } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIRefundedPayment } from '@telescript/api-types';

export interface RefundedPayment extends ParentRefundedPayment {}

export class RefundedPayment extends ParentRefundedPayment {
	public constructor(
		public client: Client,
		data: APIRefundedPayment,
	) {
		super(data);
	}
}
