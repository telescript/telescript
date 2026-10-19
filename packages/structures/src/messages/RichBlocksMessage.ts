import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class RichBlocksMessage extends BaseMessage<MessageType.RichBlocks> {
	public get richMessage(): Resolve<'RichMessage'> {
		return createStructure(this[Structure.OwnerProperty], 'RichMessage', this[Structure.DataProperty].rich_message);
	}

	public get type(): MessageType.RichBlocks {
		return MessageType.RichBlocks;
	}

	public isRichBlocks(): this is Resolve<'RichBlocksMessage'> {
		return true;
	}
}
