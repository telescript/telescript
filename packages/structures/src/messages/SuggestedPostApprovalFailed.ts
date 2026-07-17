import { APISuggestedPostApprovalFailed } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';
import { SuggestedPostPrice } from './SuggestedPostPrice.js';

export class SuggestedPostApprovalFailed extends Structure<APISuggestedPostApprovalFailed> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? new Message(data) : null;
	}

	public get price() {
		return new SuggestedPostPrice(this[Structure.DataProperty].price);
	}
}
