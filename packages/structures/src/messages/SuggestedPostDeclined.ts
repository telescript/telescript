import { APISuggestedPostDeclined } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';

export class SuggestedPostDeclined extends Structure<APISuggestedPostDeclined> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? new Message(data) : null;
	}

	public get comment() {
		return this[Structure.DataProperty].comment ?? null;
	}
}
