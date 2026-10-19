import { APISuggestedPostApprovalFailed } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessage, type Message } from '../createMessage.js';
import { createStructure, type Resolve } from '../../registry.js';

export class SuggestedPostApprovalFailed extends Structure<APISuggestedPostApprovalFailed> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get price(): Resolve<'SuggestedPostPrice'> {
		return createStructure(this[Structure.OwnerProperty], 'SuggestedPostPrice', this[Structure.DataProperty].price);
	}
}
