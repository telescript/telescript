import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class StickerMessage extends BaseMessage<MessageType.Sticker> {
	public get sticker(): Resolve<'Sticker'> {
		return createStructure(this[Structure.OwnerProperty], 'Sticker', this[Structure.DataProperty].sticker);
	}

	public get type(): MessageType.Sticker {
		return MessageType.Sticker;
	}

	public isSticker(): this is Resolve<'StickerMessage'> {
		return true;
	}
}
