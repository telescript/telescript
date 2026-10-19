import { APIPollOption } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../formatting/entities/index.js';
import { createChat } from '../../chats/index.js';
import { createStructure, type Resolve } from '../../registry.js';

export class PollOption extends Structure<APIPollOption> {
	public get persistentId() {
		return this[Structure.DataProperty].persistent_id;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text, this[Structure.OwnerProperty])) : null;
	}

	public get media(): Resolve<'PollMedia'> | null {
		const data = this[Structure.DataProperty].media;
		return data ? createStructure(this[Structure.OwnerProperty], 'PollMedia', data) : null;
	}

	public get voterCount() {
		return this[Structure.DataProperty].voter_count;
	}

	public get addedByUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].added_by_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get addedByChat() {
		const data = this[Structure.DataProperty].added_by_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get additionUnixTimestamp() {
		return this[Structure.DataProperty].addition_date ?? null;
	}

	public get additionTimestamp() {
		const ts = this[Structure.DataProperty].addition_date;
		return ts ? ts * 1000 : null;
	}

	public get additionDate() {
		const ts = this[Structure.DataProperty].addition_date;
		return ts ? new Date(ts * 1000) : null;
	}
}
