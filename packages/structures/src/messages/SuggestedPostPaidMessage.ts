import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuggestedPostPaidMessage extends BaseMessage<MessageType.SuggestedPostPaid> {
	public get suggestedPostPaid(): Resolve<'SuggestedPostPaid'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuggestedPostPaid',
			this[Structure.DataProperty].suggested_post_paid,
		);
	}

	public get type(): MessageType.SuggestedPostPaid {
		return MessageType.SuggestedPostPaid;
	}

	public isSuggestedPostPaid(): this is Resolve<'SuggestedPostPaidMessage'> {
		return true;
	}
}
