import { APISuggestedPostRefunded } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Message } from '../core/Message.js';

export class SuggestedPostRefunded extends Structure<APISuggestedPostRefunded> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? new Message(data) : null;
	}

	public get reason() {
		return this[Structure.DataProperty].reason;
	}
}
