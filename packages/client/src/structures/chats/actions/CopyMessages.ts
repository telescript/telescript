import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { CopyMessagesOptions } from '../../../repositories/ChatRepository.js';

export type ChatCopyMessagesOptions = Omit<CopyMessagesOptions, 'fromChatId'>;

export interface ChatCopyMessagesAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatCopyMessagesAction {
	declare public client: Client;

	public async copyMessages(options: ChatCopyMessagesOptions) {
		return this.client.chats.copyMessages({ fromChatId: this[Structure.DataProperty].id, ...options });
	}
}
