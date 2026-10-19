import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuggestedPostDeclinedMessage extends BaseMessage<MessageType.SuggestedPostDeclined> {
	public get suggestedPostDeclined(): Resolve<'SuggestedPostDeclined'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuggestedPostDeclined',
			this[Structure.DataProperty].suggested_post_declined,
		);
	}

	public get type(): MessageType.SuggestedPostDeclined {
		return MessageType.SuggestedPostDeclined;
	}

	public isSuggestedPostDeclined(): this is Resolve<'SuggestedPostDeclinedMessage'> {
		return true;
	}
}
