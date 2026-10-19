import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class DeleteChatPhotoMessage extends BaseMessage<MessageType.DeleteChatPhoto> {
	public get deleteChatPhoto() {
		return this[Structure.DataProperty].delete_chat_photo;
	}

	public get type(): MessageType.DeleteChatPhoto {
		return MessageType.DeleteChatPhoto;
	}

	public isDeleteChatPhoto(): this is Resolve<'DeleteChatPhotoMessage'> {
		return true;
	}
}
