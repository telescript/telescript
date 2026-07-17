import { Checklist as ParentChecklist, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIChecklist } from '@telescript/api-types';
import { createMessageEntity } from './entity/index.js';
import { ChecklistTask } from './ChecklistTask.js';

export interface Checklist extends ParentChecklist {}

export class Checklist extends ParentChecklist {
	public constructor(
		public client: Client,
		data: APIChecklist,
	) {
		super(data);
	}

	public get titleEntities() {
		const data = this[Structure.DataProperty].title_entities;
		return data ? data.map((data) => createMessageEntity(this.client, data, this[Structure.DataProperty].title)) : null;
	}

	public get tasks() {
		return this[Structure.DataProperty].tasks.map((data) => new ChecklistTask(this.client, data));
	}
}
