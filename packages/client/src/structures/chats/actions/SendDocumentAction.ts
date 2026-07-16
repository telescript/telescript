import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendDocumentOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendDocumentActionOptions = Omit<SendDocumentOptions, 'chatId'>;

export interface ChatSendDocumentAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendDocumentAction {
	declare public client: Client;

	public async sendDocument(options: ChatSendDocumentActionOptions) {
		return this.client.chats.sendDocument({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
