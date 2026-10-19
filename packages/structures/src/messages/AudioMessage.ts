import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, GroupableMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface AudioMessage
	extends CaptionedMessageMixin<MessageType.Audio>, GroupableMessageMixin<MessageType.Audio> {}

export class AudioMessage extends BaseMessage<MessageType.Audio> {
	static {
		this.mixin(CaptionedMessageMixin, GroupableMessageMixin);
	}

	public get audio(): Resolve<'Audio'> {
		return createStructure(this[Structure.OwnerProperty], 'Audio', this[Structure.DataProperty].audio);
	}

	public get type(): MessageType.Audio {
		return MessageType.Audio;
	}

	public isAudio(): this is Resolve<'AudioMessage'> {
		return true;
	}
}
