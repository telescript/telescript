import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface PaidMediaMessage extends CaptionedMessageMixin<MessageType.PaidMedia> {}

export class PaidMediaMessage extends BaseMessage<MessageType.PaidMedia> {
	static {
		this.mixin(CaptionedMessageMixin);
	}

	public get paidMedia(): Resolve<'PaidMediaInfo'> {
		return createStructure(this[Structure.OwnerProperty], 'PaidMediaInfo', this[Structure.DataProperty].paid_media);
	}

	public get showCaptionAboveMedia() {
		return this[Structure.DataProperty].show_caption_above_media ?? null;
	}

	public get type(): MessageType.PaidMedia {
		return MessageType.PaidMedia;
	}

	public isPaidMedia(): this is Resolve<'PaidMediaMessage'> {
		return true;
	}
}
