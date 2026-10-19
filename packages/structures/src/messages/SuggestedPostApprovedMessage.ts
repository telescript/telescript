import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuggestedPostApprovedMessage extends BaseMessage<MessageType.SuggestedPostApproved> {
	public get suggestedPostApproved(): Resolve<'SuggestedPostApproved'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuggestedPostApproved',
			this[Structure.DataProperty].suggested_post_approved,
		);
	}

	public get type(): MessageType.SuggestedPostApproved {
		return MessageType.SuggestedPostApproved;
	}

	public isSuggestedPostApproved(): this is Resolve<'SuggestedPostApprovedMessage'> {
		return true;
	}
}
