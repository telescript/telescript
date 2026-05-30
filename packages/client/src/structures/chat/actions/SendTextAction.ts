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
		const data = await this.client.core.api.sendMessage(this.id, text);
		return this.client.messages.resolve(data);
	}
}
