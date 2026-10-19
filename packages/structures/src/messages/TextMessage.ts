import { MessageType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from './formatting/entities/index.js';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class TextMessage extends BaseMessage<MessageType.Text> {
	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text, this[Structure.OwnerProperty])) : null;
	}

	public get linkPreviewOptions(): Resolve<'LinkPreviewOptions'> | null {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? createStructure(this[Structure.OwnerProperty], 'LinkPreviewOptions', data) : null;
	}

	public get type(): MessageType.Text {
		return MessageType.Text;
	}

	public isText(): this is Resolve<'TextMessage'> {
		return true;
	}
}
