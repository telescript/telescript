import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VideoChatStartedMessage extends BaseMessage<MessageType.VideoChatStarted> {
	public get videoChatStarted(): Resolve<'VideoChatStarted'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'VideoChatStarted',
			this[Structure.DataProperty].video_chat_started,
		);
	}

	public get type(): MessageType.VideoChatStarted {
		return MessageType.VideoChatStarted;
	}

	public isVideoChatStarted(): this is Resolve<'VideoChatStartedMessage'> {
		return true;
	}
}
