import { APISuggestedPostRefunded } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessage, type Message } from '../createMessage.js';

export class SuggestedPostRefunded extends Structure<APISuggestedPostRefunded> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get reason() {
		return this[Structure.DataProperty].reason;
	}
}
