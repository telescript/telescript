import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, VisualMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface AnimationMessage
	extends CaptionedMessageMixin<MessageType.Animation>, VisualMessageMixin<MessageType.Animation> {}

export class AnimationMessage extends BaseMessage<MessageType.Animation> {
	static {
		this.mixin(CaptionedMessageMixin, VisualMessageMixin);
	}

	public get animation(): Resolve<'Animation'> {
		return createStructure(this[Structure.OwnerProperty], 'Animation', this[Structure.DataProperty].animation);
	}

	public get type(): MessageType.Animation {
		return MessageType.Animation;
	}

	public isAnimation(): this is Resolve<'AnimationMessage'> {
		return true;
	}
}
