import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuggestedPostRefundedMessage extends BaseMessage<MessageType.SuggestedPostRefunded> {
	public get suggestedPostRefunded(): Resolve<'SuggestedPostRefunded'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuggestedPostRefunded',
			this[Structure.DataProperty].suggested_post_refunded,
		);
	}

	public get type(): MessageType.SuggestedPostRefunded {
		return MessageType.SuggestedPostRefunded;
	}

	public isSuggestedPostRefunded(): this is Resolve<'SuggestedPostRefundedMessage'> {
		return true;
	}
}
