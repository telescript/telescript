import { APIPollOptionDeleted } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMaybeInaccessibleMessage, type MaybeInaccessibleMessage } from '../createMaybeInaccessibleMessage.js';
import { createMessageEntity } from '../formatting/entities/index.js';

export class PollOptionDeleted extends Structure<APIPollOptionDeleted> {
	public get pollMessage(): MaybeInaccessibleMessage | null {
		const data = this[Structure.DataProperty].poll_message;
		return data ? createMaybeInaccessibleMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get optionPersistentId() {
		return this[Structure.DataProperty].option_persistent_id;
	}

	public get optionText() {
		return this[Structure.DataProperty].option_text;
	}

	public get optionTextEntities() {
		const data = this[Structure.DataProperty].option_text_entities;
		return data
			? data.map((entity) => createMessageEntity(entity, this.optionText, this[Structure.OwnerProperty]))
			: null;
	}
}
