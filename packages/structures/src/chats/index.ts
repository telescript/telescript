import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';
import { createStructure, defaultOwner, registerStructures, type StructureOwner, type Resolve } from '../registry.js';
import { Community } from './Community.js';

export * from './BaseChat.js';
export * from './ChannelChat.js';
export * from './Community.js';
export * from './GroupChat.js';
export * from './PrivateChat.js';
export * from './SupergroupChat.js';
export * from './info/index.js';

export type Chat =
	| Resolve<'BaseChat'>
	| Resolve<'ChannelChat'>
	| Resolve<'GroupChat'>
	| Resolve<'PrivateChat'>
	| Resolve<'SupergroupChat'>;

export function createChat(data: APIChat, owner: StructureOwner = defaultOwner): Chat {
	switch (data.type) {
		case ChatType.Channel:
			return createStructure(owner, 'ChannelChat', data);
		case ChatType.Group:
			return createStructure(owner, 'GroupChat', data);
		case ChatType.Private:
			return createStructure(owner, 'PrivateChat', data);
		case ChatType.Supergroup:
			return createStructure(owner, 'SupergroupChat', data);
		default:
			return createStructure(owner, 'BaseChat', data);
	}
}

declare module '../registry.js' {
	interface DefaultTypes {
		BaseChat: BaseChat<never>;
		ChannelChat: ChannelChat;
		Community: Community;
		GroupChat: GroupChat;
		PrivateChat: PrivateChat;
		SupergroupChat: SupergroupChat;
	}
}

registerStructures({ BaseChat, ChannelChat, Community, GroupChat, PrivateChat, SupergroupChat });
