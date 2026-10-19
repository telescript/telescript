import { APIChecklistTasksAdded } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessage, type Message } from '../createMessage.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ChecklistTasksAdded extends Structure<APIChecklistTasksAdded> {
	public get checklistMessage(): Message | null {
		const data = this[Structure.DataProperty].checklist_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get tasks(): Resolve<'ChecklistTask'>[] {
		return this[Structure.DataProperty].tasks.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'ChecklistTask', data),
		);
	}
}
