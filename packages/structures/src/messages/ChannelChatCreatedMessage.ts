import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class ChannelChatCreatedMessage extends BaseMessage<MessageType.ChannelChatCreated> {
	public get channelChatCreated() {
		return this[Structure.DataProperty].channel_chat_created;
	}

	public get type(): MessageType.ChannelChatCreated {
		return MessageType.ChannelChatCreated;
	}

	public isChannelChatCreated(): this is Resolve<'ChannelChatCreatedMessage'> {
		return true;
	}
}
