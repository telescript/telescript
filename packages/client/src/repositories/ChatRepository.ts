import { Chat as APIChat } from '@telescript/api-types';
import { Chat } from '../structures/Chat.js';
import { Repository } from './Repository.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat): Chat {
		return new Chat(this.client, data);
	}

	public async sendText(chatId: number | string, text: string) {
		const message = await this.client.core.api.sendMessage(chatId, text);
		return this.client.messages.resolve(message);
	}
}
