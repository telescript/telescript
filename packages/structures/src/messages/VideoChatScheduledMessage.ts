import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VideoChatScheduledMessage extends BaseMessage<MessageType.VideoChatScheduled> {
	public get videoChatScheduled(): Resolve<'VideoChatScheduled'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'VideoChatScheduled',
			this[Structure.DataProperty].video_chat_scheduled,
		);
	}

	public get type(): MessageType.VideoChatScheduled {
		return MessageType.VideoChatScheduled;
	}

	public isVideoChatScheduled(): this is Resolve<'VideoChatScheduledMessage'> {
		return true;
	}
}
