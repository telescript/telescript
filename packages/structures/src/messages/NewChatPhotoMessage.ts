import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class NewChatPhotoMessage extends BaseMessage<MessageType.NewChatPhoto> {
	public get newChatPhoto(): Resolve<'PhotoSize'>[] {
		return this[Structure.DataProperty].new_chat_photo.map((item) =>
			createStructure(this[Structure.OwnerProperty], 'PhotoSize', item),
		);
	}

	public get type(): MessageType.NewChatPhoto {
		return MessageType.NewChatPhoto;
	}

	public isNewChatPhoto(): this is Resolve<'NewChatPhotoMessage'> {
		return true;
	}
}
