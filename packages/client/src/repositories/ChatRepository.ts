import { APIChat, ChatType } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { BaseChat, ChannelChat, Chat, GroupChat, PrivateChat, SupergroupChat } from '../structures/chats/index.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat): Chat {
		switch (data.type) {
			case ChatType.Channel:
				return new ChannelChat(this.client, data);
			case ChatType.Group:
				return new GroupChat(this.client, data);
			case ChatType.Private:
				return new PrivateChat(this.client, data);
			case ChatType.Supergroup:
				return new SupergroupChat(this.client, data);
			default:
				return new BaseChat<ChatType, APIChat>(this.client, data);
		}
	}

	public async sendText(chatId: number | string, text: string) {
		const message = await this.client.core.api.sendMessage(chatId, text);
		return this.client.messages.resolve(message);
	}
}
