import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';

export interface SendTextAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class SendTextAction {
	declare public client: Client;

	public async sendText(text: string) {
		return this.client.chats.sendText(this[Structure.DataProperty].id, text);
	}
}
