import { APIChecklistTask } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../formatting/entities/index.js';
import { createChat } from '../../chats/index.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ChecklistTask extends Structure<APIChecklistTask> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data
			? data.map((data) => createMessageEntity(data, this[Structure.DataProperty].text, this[Structure.OwnerProperty]))
			: null;
	}

	public get completedByUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].completed_by_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get completedByChat() {
		const data = this[Structure.DataProperty].completed_by_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get completionUnixTimestamp() {
		return this[Structure.DataProperty].completion_date ?? null;
	}

	public get completionTimestamp() {
		const ts = this[Structure.DataProperty].completion_date;
		return ts ? ts * 1000 : null;
	}

	public get completionDate() {
		const ts = this[Structure.DataProperty].completion_date;
		return ts ? new Date(ts * 1000) : null;
	}
}
