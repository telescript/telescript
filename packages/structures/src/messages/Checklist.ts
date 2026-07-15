import { APIChecklist } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from './entity/index.js';
import { ChecklistTask } from './ChecklistTask.js';

export class Checklist extends Structure<APIChecklist> {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get titleEntities() {
		const data = this[Structure.DataProperty].title_entities;
		return data ? data.map((data) => createMessageEntity(data, this[Structure.DataProperty].title)) : null;
	}

	public get tasks() {
		return this[Structure.DataProperty].tasks.map((data) => new ChecklistTask(data));
	}

	public get othersCanAddTasks() {
		return this[Structure.DataProperty].others_can_add_tasks ?? null;
	}

	public get othersCanMarkTasksAsDone() {
		return this[Structure.DataProperty].others_can_mark_tasks_as_done ?? null;
	}
}
