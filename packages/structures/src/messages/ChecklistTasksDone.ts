import { APIChecklistTasksDone } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';

export class ChecklistTasksDone extends Structure<APIChecklistTasksDone> {
	public get checklistMessage(): Message | null {
		const data = this[Structure.DataProperty].checklist_message;
		return data ? new Message(data) : null;
	}

	public get markedAsDoneTaskIds() {
		return this[Structure.DataProperty].marked_as_done_task_ids ?? null;
	}

	public get markedAsNotDoneTaskIds() {
		return this[Structure.DataProperty].marked_as_not_done_task_ids ?? null;
	}
}
