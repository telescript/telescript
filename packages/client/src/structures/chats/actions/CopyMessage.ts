import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { CopyMessageOptions } from '../../../repositories/ChatRepository.js';

export type ChatCopyMessageOptions = Omit<CopyMessageOptions, 'fromChatId'>;

export interface ChatCopyMessageAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatCopyMessageAction {
	declare public client: Client;

	public async copyMessage(options: ChatCopyMessageOptions) {
		return this.client.chats.copyMessage({ fromChatId: this[Structure.DataProperty].id, ...options });
	}
}
