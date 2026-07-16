import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendAnimationOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendAnimationActionOptions = Omit<SendAnimationOptions, 'chatId'>;

export interface ChatSendAnimationAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendAnimationAction {
	declare public client: Client;

	public async sendAnimation(options: ChatSendAnimationActionOptions) {
		return this.client.chats.sendAnimation({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
