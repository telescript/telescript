import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class SuggestedPostApprovalFailedMessage extends BaseMessage<MessageType.SuggestedPostApprovalFailed> {
	public get suggestedPostApprovalFailed(): Resolve<'SuggestedPostApprovalFailed'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'SuggestedPostApprovalFailed',
			this[Structure.DataProperty].suggested_post_approval_failed,
		);
	}

	public get type(): MessageType.SuggestedPostApprovalFailed {
		return MessageType.SuggestedPostApprovalFailed;
	}

	public isSuggestedPostApprovalFailed(): this is Resolve<'SuggestedPostApprovalFailedMessage'> {
		return true;
	}
}
