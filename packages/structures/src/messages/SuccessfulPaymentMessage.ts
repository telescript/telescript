import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuccessfulPaymentMessage extends BaseMessage<MessageType.SuccessfulPayment> {
	public get successfulPayment(): Resolve<'SuccessfulPayment'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuccessfulPayment',
			this[Structure.DataProperty].successful_payment,
		);
	}

	public get type(): MessageType.SuccessfulPayment {
		return MessageType.SuccessfulPayment;
	}

	public isSuccessfulPayment(): this is Resolve<'SuccessfulPaymentMessage'> {
		return true;
	}
}
