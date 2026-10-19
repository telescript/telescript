import { APIMessage, MessageType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../formatting/entities/index.js';
import type { BaseMessage } from '../BaseMessage.js';

export interface CaptionedMessageMixin<
	Type extends MessageType.Captioned = MessageType.Captioned,
	Data extends APIMessage.Base & APIMessage.CaptionedBase = APIMessage.FromType<Type>,
> extends BaseMessage<Type, Data> {}

export class CaptionedMessageMixin {
	public get caption() {
		return this[Structure.DataProperty].caption ?? null;
	}

	public get captionEntities() {
		const data = this[Structure.DataProperty].caption_entities;
		return data
			? data.map((entity) => createMessageEntity(entity, this.caption ?? '', this[Structure.OwnerProperty]))
			: null;
	}

	public isCaptioned(): this is CaptionedMessageMixin {
		return true;
	}
}
