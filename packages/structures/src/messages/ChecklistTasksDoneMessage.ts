import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChecklistTasksDoneMessage extends BaseMessage<MessageType.ChecklistTasksDone> {
	public get checklistTasksDone(): Resolve<'ChecklistTasksDone'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ChecklistTasksDone',
			this[Structure.DataProperty].checklist_tasks_done,
		);
	}

	public get type(): MessageType.ChecklistTasksDone {
		return MessageType.ChecklistTasksDone;
	}

	public isChecklistTasksDone(): this is Resolve<'ChecklistTasksDoneMessage'> {
		return true;
	}
}
