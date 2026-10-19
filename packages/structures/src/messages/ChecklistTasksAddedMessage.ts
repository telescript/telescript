import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChecklistTasksAddedMessage extends BaseMessage<MessageType.ChecklistTasksAdded> {
	public get checklistTasksAdded(): Resolve<'ChecklistTasksAdded'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ChecklistTasksAdded',
			this[Structure.DataProperty].checklist_tasks_added,
		);
	}

	public get type(): MessageType.ChecklistTasksAdded {
		return MessageType.ChecklistTasksAdded;
	}

	public isChecklistTasksAdded(): this is Resolve<'ChecklistTasksAddedMessage'> {
		return true;
	}
}
