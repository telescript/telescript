import { APISuggestedPostPaid } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessage, type Message } from '../createMessage.js';
import { createStructure, type Resolve } from '../../registry.js';

export class SuggestedPostPaid extends Structure<APISuggestedPostPaid> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get amount() {
		return this[Structure.DataProperty].amount ?? null;
	}

	public get starAmount(): Resolve<'StarAmount'> | null {
		const data = this[Structure.DataProperty].star_amount;
		return data ? createStructure(this[Structure.OwnerProperty], 'StarAmount', data) : null;
	}
}
