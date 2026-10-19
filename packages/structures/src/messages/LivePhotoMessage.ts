import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, GroupableMessageMixin, VisualMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface LivePhotoMessage
	extends
		CaptionedMessageMixin<MessageType.LivePhoto>,
		VisualMessageMixin<MessageType.LivePhoto>,
		GroupableMessageMixin<MessageType.LivePhoto> {}

export class LivePhotoMessage extends BaseMessage<MessageType.LivePhoto> {
	static {
		this.mixin(CaptionedMessageMixin, VisualMessageMixin, GroupableMessageMixin);
	}

	public get livePhoto(): Resolve<'LivePhoto'> {
		return createStructure(this[Structure.OwnerProperty], 'LivePhoto', this[Structure.DataProperty].live_photo);
	}

	public get type(): MessageType.LivePhoto {
		return MessageType.LivePhoto;
	}

	public isLivePhoto(): this is Resolve<'LivePhotoMessage'> {
		return true;
	}
}
