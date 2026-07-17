import { APIChecklistTasksAdded } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Message } from '../core/Message.js';
import { ChecklistTask } from './ChecklistTask.js';

export class ChecklistTasksAdded extends Structure<APIChecklistTasksAdded> {
	public get checklistMessage(): Message | null {
		const data = this[Structure.DataProperty].checklist_message;
		return data ? new Message(data) : null;
	}

	public get tasks() {
		return this[Structure.DataProperty].tasks.map((data) => new ChecklistTask(data));
	}
}
