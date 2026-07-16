import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendStickerOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendStickerActionOptions = Omit<SendStickerOptions, 'chatId'>;

export interface ChatSendStickerAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendStickerAction {
	declare public client: Client;

	public async sendSticker(options: ChatSendStickerActionOptions) {
		return this.client.chats.sendSticker({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
