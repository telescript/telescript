import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class UniqueGiftMessage extends BaseMessage<MessageType.UniqueGift> {
	public get uniqueGift(): Resolve<'UniqueGiftInfo'> {
		return createStructure(this[Structure.OwnerProperty], 'UniqueGiftInfo', this[Structure.DataProperty].unique_gift);
	}

	public get type(): MessageType.UniqueGift {
		return MessageType.UniqueGift;
	}

	public isUniqueGift(): this is Resolve<'UniqueGiftMessage'> {
		return true;
	}
}
