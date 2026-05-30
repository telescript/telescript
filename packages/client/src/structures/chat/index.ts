import { APIChat, ChatType } from '@telescript/api-types';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';
import { Chat } from './Chat.js';
import { Client } from '../../client/Client.js';

export * from './Chat.js';
export * from './ChannelChat.js';
export * from './GroupChat.js';
export * from './PrivateChat.js';
export * from './SupergroupChat.js';

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
