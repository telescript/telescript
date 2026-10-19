import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class PaidMessagePriceChangedMessage extends BaseMessage<MessageType.PaidMessagePriceChanged> {
	public get paidMessagePriceChanged(): Resolve<'PaidMessagePriceChanged'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'PaidMessagePriceChanged',
			this[Structure.DataProperty].paid_message_price_changed,
		);
	}

	public get type(): MessageType.PaidMessagePriceChanged {
		return MessageType.PaidMessagePriceChanged;
	}

	public isPaidMessagePriceChanged(): this is Resolve<'PaidMessagePriceChangedMessage'> {
		return true;
	}
}
