import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { ForwardMessageOptions } from '../../../repositories/ChatRepository.js';

export type ChatForwardMessageOptions = Omit<ForwardMessageOptions, 'fromChatId'>;

export interface ChatForwardMessageAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatForwardMessageAction {
	declare public client: Client;

	public async forwardMessage(options: ChatForwardMessageOptions) {
		return this.client.chats.forwardMessage({ fromChatId: this[Structure.DataProperty].id, ...options });
	}
}
