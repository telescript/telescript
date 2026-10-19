import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface VoiceMessage extends CaptionedMessageMixin<MessageType.Voice> {}

export class VoiceMessage extends BaseMessage<MessageType.Voice> {
	static {
		this.mixin(CaptionedMessageMixin);
	}

	public get voice(): Resolve<'Voice'> {
		return createStructure(this[Structure.OwnerProperty], 'Voice', this[Structure.DataProperty].voice);
	}

	public get type(): MessageType.Voice {
		return MessageType.Voice;
	}

	public isVoice(): this is Resolve<'VoiceMessage'> {
		return true;
	}
}
