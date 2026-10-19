import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { CaptionedMessageMixin, GroupableMessageMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export interface DocumentMessage
	extends CaptionedMessageMixin<MessageType.Document>, GroupableMessageMixin<MessageType.Document> {}

export class DocumentMessage extends BaseMessage<MessageType.Document> {
	static {
		this.mixin(CaptionedMessageMixin, GroupableMessageMixin);
	}

	public get document(): Resolve<'Document'> {
		return createStructure(this[Structure.OwnerProperty], 'Document', this[Structure.DataProperty].document);
	}

	public get type(): MessageType.Document {
		return MessageType.Document;
	}

	public isDocument(): this is Resolve<'DocumentMessage'> {
		return true;
	}
}
