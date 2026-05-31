import { APIChat, ChatType } from '@telescript/api-types';
import { ChannelChat, Chat, GroupChat, PrivateChat, SupergroupChat } from '../structures/index.js';
import { Client } from '../client/Client.js';

export function createChat(client: Client, data: APIChat) {
	switch (data.type) {
		case ChatType.Channel:
			return new ChannelChat(client, data);
		case ChatType.Group:
			return new GroupChat(client, data);
		case ChatType.Private:
			return new PrivateChat(client, data);
		case ChatType.Supergroup:
			return new SupergroupChat(client, data);
		default:
			return new Chat<ChatType, APIChat>(client, data);
	}
}
