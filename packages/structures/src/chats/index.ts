import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';

export * from './BaseChat.js';
export * from './ChannelChat.js';
export * from './GroupChat.js';
export * from './PrivateChat.js';
export * from './SupergroupChat.js';

export type Chat = BaseChat<never> | ChannelChat | GroupChat | PrivateChat | SupergroupChat;

export function createChat(data: APIChat): Chat {
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
			return new BaseChat<never>(data);
	}
}
