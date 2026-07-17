import { APIChecklistTask } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from './entity/index.js';
import { User } from '../users/User.js';
import { createChat } from '../chats/index.js';

export class ChecklistTask extends Structure<APIChecklistTask> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data ? data.map((data) => createMessageEntity(data, this[Structure.DataProperty].text)) : null;
	}

	public get completedByUser() {
		const data = this[Structure.DataProperty].completed_by_user;
		return data ? new User(data) : null;
	}

	public get completedByChat() {
		const data = this[Structure.DataProperty].completed_by_chat;
		return data ? createChat(data) : null;
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
