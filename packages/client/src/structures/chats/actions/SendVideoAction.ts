import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendVideoOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendVideoActionOptions = Omit<SendVideoOptions, 'chatId'>;

export interface ChatSendVideoAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendVideoAction {
	declare public client: Client;

	public async sendVideo(options: ChatSendVideoActionOptions) {
		return this.client.chats.sendVideo({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
