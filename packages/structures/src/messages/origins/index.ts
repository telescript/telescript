import { APIMessageOrigin, MessageOriginType } from '@telescript/api-types';
import { ChannelMessageOrigin } from './ChannelMessageOrigin.js';
import { ChatMessageOrigin } from './ChatMessageOrigin.js';
import { HiddenUserMessageOrigin } from './HiddenUserMessageOrigin.js';
import { UserMessageOrigin } from './UserMessageOrigin.js';
import { BaseMessageOrigin } from './BaseMessageOrigin.js';
import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../registry.js';

export * from './BaseMessageOrigin.js';
export * from './ChannelMessageOrigin.js';
export * from './ChatMessageOrigin.js';
export * from './HiddenUserMessageOrigin.js';
export * from './UserMessageOrigin.js';

export type MessageOrigin =
	| Resolve<'BaseMessageOrigin'>
	| Resolve<'ChannelMessageOrigin'>
	| Resolve<'ChatMessageOrigin'>
	| Resolve<'HiddenUserMessageOrigin'>
	| Resolve<'UserMessageOrigin'>;

export function createMessageOrigin(data: APIMessageOrigin, owner: StructureOwner = defaultOwner): MessageOrigin {
	switch (data.type) {
		case MessageOriginType.Channel:
			return createStructure(owner, 'ChannelMessageOrigin', data);
		case MessageOriginType.Chat:
			return createStructure(owner, 'ChatMessageOrigin', data);
		case MessageOriginType.HiddenUser:
			return createStructure(owner, 'HiddenUserMessageOrigin', data);
		case MessageOriginType.User:
			return createStructure(owner, 'UserMessageOrigin', data);
		default:
			return createStructure(owner, 'BaseMessageOrigin', data);
	}
}

declare module '../../registry.js' {
	interface DefaultTypes {
		BaseMessageOrigin: BaseMessageOrigin<never>;
		ChannelMessageOrigin: ChannelMessageOrigin;
		ChatMessageOrigin: ChatMessageOrigin;
		HiddenUserMessageOrigin: HiddenUserMessageOrigin;
		UserMessageOrigin: UserMessageOrigin;
	}
}

registerStructures({
	BaseMessageOrigin,
	ChannelMessageOrigin,
	ChatMessageOrigin,
	HiddenUserMessageOrigin,
	UserMessageOrigin,
});
