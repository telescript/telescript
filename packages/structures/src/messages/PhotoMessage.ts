import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, VisualMessageMixin, GroupableMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface PhotoMessage
	extends
		CaptionedMessageMixin<MessageType.Photo>,
		VisualMessageMixin<MessageType.Photo>,
		GroupableMessageMixin<MessageType.Photo> {}

export class PhotoMessage extends BaseMessage<MessageType.Photo> {
	static {
		this.mixin(CaptionedMessageMixin, VisualMessageMixin, GroupableMessageMixin);
	}

	public get photo(): Resolve<'PhotoSize'>[] {
		return this[Structure.DataProperty].photo.map((item) =>
			createStructure(this[Structure.OwnerProperty], 'PhotoSize', item),
		);
	}

	public get type(): MessageType.Photo {
		return MessageType.Photo;
	}

	public isPhoto(): this is Resolve<'PhotoMessage'> {
		return true;
	}
}
