import { User } from './user.js';

export interface MessageId {
	message_id: number;
}

export interface Message extends MessageId {
	from?: User;
	date: number;
	text?: string;
}
