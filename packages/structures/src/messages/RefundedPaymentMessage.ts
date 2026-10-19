import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class RefundedPaymentMessage extends BaseMessage<MessageType.RefundedPayment> {
	public get refundedPayment(): Resolve<'RefundedPayment'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'RefundedPayment',
			this[Structure.DataProperty].refunded_payment,
		);
	}

	public get type(): MessageType.RefundedPayment {
		return MessageType.RefundedPayment;
	}

	public isRefundedPayment(): this is Resolve<'RefundedPaymentMessage'> {
		return true;
	}
}
