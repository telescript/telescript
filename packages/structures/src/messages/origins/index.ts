import { APIMessageOrigin, MessageOriginType } from '@telescript/api-types';
import { ChannelMessageOrigin } from './ChannelMessageOrigin.js';
import { ChatMessageOrigin } from './ChatMessageOrigin.js';
import { HiddenUserMessageOrigin } from './HiddenUserMessageOrigin.js';
import { UserMessageOrigin } from './UserMessageOrigin.js';
import { BaseMessageOrigin } from './index.js';

export * from './BaseMessageOrigin.js';
export * from './ChannelMessageOrigin.js';
export * from './ChatMessageOrigin.js';
export * from './HiddenUserMessageOrigin.js';
export * from './UserMessageOrigin.js';

export type MessageOrigin =
	| BaseMessageOrigin<never>
	| ChannelMessageOrigin
	| ChatMessageOrigin
	| HiddenUserMessageOrigin
	| UserMessageOrigin;

export function createMessageOrigin(data: APIMessageOrigin): MessageOrigin {
	switch (data.type) {
		case MessageOriginType.Channel:
			return new ChannelMessageOrigin(data);
		case MessageOriginType.Chat:
			return new ChatMessageOrigin(data);
		case MessageOriginType.HiddenUser:
			return new HiddenUserMessageOrigin(data);
		case MessageOriginType.User:
			return new UserMessageOrigin(data);
		default:
			return new BaseMessageOrigin<never>(data);
	}
}
