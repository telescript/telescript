import { APIChat, ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';

export * from './Chat.js';
export * from './ChannelChat.js';
export * from './GroupChat.js';
export * from './PrivateChat.js';
export * from './SupergroupChat.js';

export function createChat(data: APIChat) {
	switch (data.type) {
		case ChatType.Channel:
			return new ChannelChat(data);
		case ChatType.Group:
			return new GroupChat(data);
		case ChatType.Private:
			return new PrivateChat(data);
		case ChatType.Supergroup:
			return new SupergroupChat(data);
		default:
			return new Chat<ChatType, APIChat>(data);
	}
}
