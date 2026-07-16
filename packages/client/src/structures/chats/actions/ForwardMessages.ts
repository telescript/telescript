import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { ForwardMessagesOptions } from '../../../repositories/ChatRepository.js';

export type ChatForwardMessagesOptions = Omit<ForwardMessagesOptions, 'fromChatId'>;

export interface ChatForwardMessagesAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatForwardMessagesAction {
	declare public client: Client;

	public async forwardMessages(options: ChatForwardMessagesOptions) {
		return this.client.chats.forwardMessages({ fromChatId: this[Structure.DataProperty].id, ...options });
	}
}
