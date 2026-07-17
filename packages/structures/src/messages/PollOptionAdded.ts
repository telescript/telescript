import { APIPollOptionAdded } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';
import { createMessageEntity } from './entity/index.js';

export class PollOptionAdded extends Structure<APIPollOptionAdded> {
	public get pollMessage(): Message | null {
		const data = this[Structure.DataProperty].poll_message;
		return data ? new Message(data) : null;
	}

	public get optionPersistentId() {
		return this[Structure.DataProperty].option_persistent_id;
	}

	public get optionText() {
		return this[Structure.DataProperty].option_text;
	}

	public get optionTextEntities() {
		const data = this[Structure.DataProperty].option_text_entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.optionText)) : null;
	}
}
