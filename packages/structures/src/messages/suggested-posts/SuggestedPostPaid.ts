import { APISuggestedPostPaid } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Message } from '../core/Message.js';
import { StarAmount } from '../payments/StarAmount.js';

export class SuggestedPostPaid extends Structure<APISuggestedPostPaid> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? new Message(data) : null;
	}

	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get amount() {
		return this[Structure.DataProperty].amount ?? null;
	}

	public get starAmount() {
		const data = this[Structure.DataProperty].star_amount;
		return data ? new StarAmount(data) : null;
	}
}
