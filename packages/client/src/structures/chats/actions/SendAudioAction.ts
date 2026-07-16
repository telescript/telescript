import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendAudioOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendAudioActionOptions = Omit<SendAudioOptions, 'chatId'>;

export interface ChatSendAudioAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendAudioAction {
	declare public client: Client;

	public async sendAudio(options: ChatSendAudioActionOptions) {
		return this.client.chats.sendAudio({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
