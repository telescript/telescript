import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendPhotoOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendPhotoOptions = Omit<SendPhotoOptions, 'chatId'>;

export interface ChatSendPhotoAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendPhotoAction {
	declare public client: Client;

	public async sendPhoto(options: ChatSendPhotoOptions) {
		return this.client.chats.sendPhoto({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
