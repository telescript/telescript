import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendVoiceOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendVoiceActionOptions = Omit<SendVoiceOptions, 'chatId'>;

export interface ChatSendVoiceAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendVoiceAction {
	declare public client: Client;

	public async sendVoice(options: ChatSendVoiceActionOptions) {
		return this.client.chats.sendVoice({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
