import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class DirectMessagePriceChangedMessage extends BaseMessage<MessageType.DirectMessagePriceChanged> {
	public get directMessagePriceChanged(): Resolve<'DirectMessagePriceChanged'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'DirectMessagePriceChanged',
			this[Structure.DataProperty].direct_message_price_changed,
		);
	}

	public get type(): MessageType.DirectMessagePriceChanged {
		return MessageType.DirectMessagePriceChanged;
	}

	public isDirectMessagePriceChanged(): this is Resolve<'DirectMessagePriceChangedMessage'> {
		return true;
	}
}
