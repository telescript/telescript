import { APIChat, ChatType } from '@telescript/api-types';
import { Client } from '../../../client/index.js';
import { BaseChat, Structure } from '@telescript/structures';
import { SendVideoNoteOptions } from '../../../repositories/ChatRepository.js';

export type ChatSendVideoNoteActionOptions = Omit<SendVideoNoteOptions, 'chatId'>;

export interface ChatSendVideoNoteAction<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class ChatSendVideoNoteAction {
	declare public client: Client;

	public async sendVideoNote(options: ChatSendVideoNoteActionOptions) {
		return this.client.chats.sendVideoNote({ chatId: this[Structure.DataProperty].id, ...options });
	}
}
