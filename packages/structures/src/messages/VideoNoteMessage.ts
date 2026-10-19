import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VideoNoteMessage extends BaseMessage<MessageType.VideoNote> {
	public get videoNote(): Resolve<'VideoNote'> {
		return createStructure(this[Structure.OwnerProperty], 'VideoNote', this[Structure.DataProperty].video_note);
	}

	public get type(): MessageType.VideoNote {
		return MessageType.VideoNote;
	}

	public isVideoNote(): this is Resolve<'VideoNoteMessage'> {
		return true;
	}
}
