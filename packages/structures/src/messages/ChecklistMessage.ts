import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ChecklistMessage extends BaseMessage<MessageType.Checklist> {
	public get checklist(): Resolve<'Checklist'> {
		return createStructure(this[Structure.OwnerProperty], 'Checklist', this[Structure.DataProperty].checklist);
	}

	public get type(): MessageType.Checklist {
		return MessageType.Checklist;
	}

	public isChecklist(): this is Resolve<'ChecklistMessage'> {
		return true;
	}
}
