import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VideoChatEndedMessage extends BaseMessage<MessageType.VideoChatEnded> {
	public get videoChatEnded(): Resolve<'VideoChatEnded'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'VideoChatEnded',
			this[Structure.DataProperty].video_chat_ended,
		);
	}

	public get type(): MessageType.VideoChatEnded {
		return MessageType.VideoChatEnded;
	}

	public isVideoChatEnded(): this is Resolve<'VideoChatEndedMessage'> {
		return true;
	}
}
