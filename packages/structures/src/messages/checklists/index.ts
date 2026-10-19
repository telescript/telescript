import { registerStructures } from '../../registry.js';
import { Checklist } from './Checklist.js';
import { ChecklistTask } from './ChecklistTask.js';
import { ChecklistTasksAdded } from './ChecklistTasksAdded.js';
import { ChecklistTasksDone } from './ChecklistTasksDone.js';
export * from './Checklist.js';
export * from './ChecklistTask.js';
export * from './ChecklistTasksAdded.js';
export * from './ChecklistTasksDone.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		Checklist: Checklist;
		ChecklistTask: ChecklistTask;
		ChecklistTasksAdded: ChecklistTasksAdded;
		ChecklistTasksDone: ChecklistTasksDone;
	}
}

registerStructures({ Checklist, ChecklistTask, ChecklistTasksAdded, ChecklistTasksDone });
