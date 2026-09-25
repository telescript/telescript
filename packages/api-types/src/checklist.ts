import { APIChat } from './chat.js';
import { APIMessage, APIMessageEntity, RepliedToMessageFrom } from './message.js';
import { APIUser } from './user.js';

export interface APIChecklistTask {
	id: number;
	text: string;
	text_entities?: APIMessageEntity[];
	completed_by_user?: APIUser;
	completed_by_chat?: APIChat;
	completion_date?: number;
}

export interface APIChecklist {
	title: string;
	title_entities?: APIMessageEntity[];
	tasks: APIChecklistTask[];
	others_can_add_tasks?: true;
	others_can_mark_tasks_as_done?: true;
}

export interface APIChecklistTasksDone {
	checklist_message?: RepliedToMessageFrom<APIMessage>;
	marked_as_done_task_ids?: number[];
	marked_as_not_done_task_ids?: number[];
}

export interface APIChecklistTasksAdded {
	checklist_message?: RepliedToMessageFrom<APIMessage>;
	tasks: APIChecklistTask[];
}
