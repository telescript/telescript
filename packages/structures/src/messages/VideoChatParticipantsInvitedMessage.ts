import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VideoChatParticipantsInvitedMessage extends BaseMessage<MessageType.VideoChatParticipantsInvited> {
	public get videoChatParticipantsInvited(): Resolve<'VideoChatParticipantsInvited'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'VideoChatParticipantsInvited',
			this[Structure.DataProperty].video_chat_participants_invited,
		);
	}

	public get type(): MessageType.VideoChatParticipantsInvited {
		return MessageType.VideoChatParticipantsInvited;
	}

	public isVideoChatParticipantsInvited(): this is Resolve<'VideoChatParticipantsInvitedMessage'> {
		return true;
	}
}
