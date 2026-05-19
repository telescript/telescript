import { APIChat } from './chat.js';
import { APIUser } from './user.js';

export interface APIMessageId {
	message_id: number;
}

export interface APIMessage extends APIMessageId {
	from?: APIUser;
	date: number;
	chat: APIChat;
	text?: string;
}
