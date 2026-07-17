import { ChecklistTask as ParentChecklistTask, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIChecklistTask } from '@telescript/api-types';
import { createMessageEntity } from './entity/index.js';

export interface ChecklistTask extends ParentChecklistTask {}

export class ChecklistTask extends ParentChecklistTask {
	public constructor(
		public client: Client,
		data: APIChecklistTask,
	) {
		super(data);
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data ? data.map((data) => createMessageEntity(this.client, data, this[Structure.DataProperty].text)) : null;
	}

	public get completedByUser() {
		const data = this[Structure.DataProperty].completed_by_user;
		return data ? this.client.users.resolve(data) : null;
	}

	public get completedByChat() {
		const data = this[Structure.DataProperty].completed_by_chat;
		return data ? this.client.chats.resolve(data) : null;
	}
}
