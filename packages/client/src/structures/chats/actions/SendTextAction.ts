import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { Chat } from '@telescript/structures';

export interface SendTextAction<
	Type extends ChatType = ChatType,
	Data extends APIChat = APIChat.FromType<Type>,
> extends Chat<Type, Data> {}

export class SendTextAction {
	declare public client: Client;

	public async sendText(text: string) {
		return this.client.chats.sendText(this.id, text);
	}
}
