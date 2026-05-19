import { Message } from './message.js';

interface UpdateBase {
	update_id: number;
}

export interface MessageUpdate extends UpdateBase {
	message: Message;
}

export type Update = UpdateBase | MessageUpdate;
