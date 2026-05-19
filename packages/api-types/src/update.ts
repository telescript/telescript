import { APIMessage } from './message.js';

interface UpdateBase {
	update_id: number;
}

export interface APIMessageUpdate extends UpdateBase {
	message: APIMessage;
}

export type APIUpdate = UpdateBase | APIMessageUpdate;

export function isMessageUpdate(update: APIUpdate): update is APIMessageUpdate {
	return 'message' in update;
}
