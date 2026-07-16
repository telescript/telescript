import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendTextOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendTextOptions = Omit<SendTextOptions, 'chatId'>;

export interface ChatSendTextAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendTextAction {
	declare public client: Client;

	public async sendText(options: ChatSendTextOptions) {
		return this.client.chats.sendText({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
