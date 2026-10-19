import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, VisualMessageMixin, GroupableMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface VideoMessage
	extends
		CaptionedMessageMixin<MessageType.Video>,
		VisualMessageMixin<MessageType.Video>,
		GroupableMessageMixin<MessageType.Video> {}

export class VideoMessage extends BaseMessage<MessageType.Video> {
	static {
		this.mixin(CaptionedMessageMixin, VisualMessageMixin, GroupableMessageMixin);
	}

	public get video(): Resolve<'Video'> {
		return createStructure(this[Structure.OwnerProperty], 'Video', this[Structure.DataProperty].video);
	}

	public get type(): MessageType.Video {
		return MessageType.Video;
	}

	public isVideo(): this is Resolve<'VideoMessage'> {
		return true;
	}
}
