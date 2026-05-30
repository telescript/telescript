import { APIChat } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { Chat, createChat } from '../structures/chat/index.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat) {
		return createChat(this.client, data);
	}

	public async sendText(chatId: number | string, text: string) {
		const message = await this.client.core.api.sendMessage(chatId, text);
		return this.client.messages.resolve(message);
	}
}
