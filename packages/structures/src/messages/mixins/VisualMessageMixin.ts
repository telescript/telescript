import { APIMessage, MessageType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import type { BaseMessage } from '../BaseMessage.js';

export interface VisualMessageMixin<
	Type extends MessageType.Visual = MessageType.Visual,
	Data extends APIMessage.Base & APIMessage.VisualBase = APIMessage.FromType<Type>,
> extends BaseMessage<Type, Data> {}

export class VisualMessageMixin {
	public get showCaptionAboveMedia() {
		return this[Structure.DataProperty].show_caption_above_media ?? null;
	}

	public get hasMediaSpoiler() {
		return this[Structure.DataProperty].has_media_spoiler ?? null;
	}

	public isVisual(): this is VisualMessageMixin {
		return true;
	}
}
