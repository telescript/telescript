import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiftMessage extends BaseMessage<MessageType.Gift> {
	public get gift(): Resolve<'GiftInfo'> {
		return createStructure(this[Structure.OwnerProperty], 'GiftInfo', this[Structure.DataProperty].gift);
	}

	public get type(): MessageType.Gift {
		return MessageType.Gift;
	}

	public isGift(): this is Resolve<'GiftMessage'> {
		return true;
	}
}
