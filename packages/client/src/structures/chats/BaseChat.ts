import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat as ParentBaseChat } from '@telescript/structures';
import { Client } from '../../client/index.js';
import {
	ChatCopyMessageAction,
	ChatForwardMessageAction,
	ChatForwardMessagesAction,
	ChatSendAnimationAction,
	ChatSendAudioAction,
	ChatSendDocumentAction,
	ChatSendPhotoAction,
	ChatSendStickerAction,
	ChatSendTextAction,
	ChatSendVideoAction,
	ChatSendVideoNoteAction,
	ChatSendVoiceAction,
} from './actions/index.js';

export interface BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
>
	extends
		ChatCopyMessageAction<Type, Data>,
		ChatForwardMessagesAction<Type, Data>,
		ChatForwardMessageAction<Type, Data>,
		ChatForwardMessagesAction<Type, Data>,
		ChatSendAnimationAction<Type, Data>,
		ChatSendAudioAction<Type, Data>,
		ChatSendDocumentAction<Type, Data>,
		ChatSendPhotoAction<Type, Data>,
		ChatSendStickerAction<Type, Data>,
		ChatSendTextAction<Type, Data>,
		ChatSendVideoAction<Type, Data>,
		ChatSendVideoNoteAction<Type, Data>,
		ChatSendVoiceAction<Type, Data> {}

export class BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentBaseChat<Type, Data> {
	static {
		this.mixin(
			ChatCopyMessageAction,
			ChatForwardMessagesAction,
			ChatForwardMessageAction,
			ChatForwardMessagesAction,
			ChatSendAnimationAction,
			ChatSendAudioAction,
			ChatSendDocumentAction,
			ChatSendPhotoAction,
			ChatSendStickerAction,
			ChatSendTextAction,
			ChatSendVideoAction,
			ChatSendVideoNoteAction,
			ChatSendVoiceAction,
		);
	}

	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
