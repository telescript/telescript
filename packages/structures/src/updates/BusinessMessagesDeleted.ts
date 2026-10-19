import { APIBusinessMessagesDeleted } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class BusinessMessagesDeleted extends Structure<APIBusinessMessagesDeleted> {
	public get businessConnectionId() {
		return this[Structure.DataProperty].business_connection_id;
	}

	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get messageIds() {
		return this[Structure.DataProperty].message_ids;
	}
}
