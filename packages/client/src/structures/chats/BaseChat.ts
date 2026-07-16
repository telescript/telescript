import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat as ParentBaseChat, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import {
	CopyMessageOptions,
	CopyMessagesOptions,
	ForwardMessageOptions,
	ForwardMessagesOptions,
	SendAnimationOptions,
	SendAudioOptions,
	SendDocumentOptions,
	SendPhotoOptions,
	SendStickerOptions,
	SendTextOptions,
	SendVideoNoteOptions,
	SendVideoOptions,
	SendVoiceOptions,
} from '../../repositories/index.js';

export class BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentBaseChat<Type, Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}

	public async sendText(options: ChatSendTextOptions) {
		return this.client.messages.sendText({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async forwardMessage(options: ChatForwardMessageOptions) {
		return this.client.messages.forwardOne({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async forwardMessages(options: ChatForwardMessagesOptions) {
		return this.client.messages.forwardMany({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async copyMessage(options: ChatCopyMessageOptions) {
		return this.client.messages.copyOne({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async copyMessages(options: ChatCopyMessagesOptions) {
		return this.client.messages.copyMany({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendPhoto(options: ChatSendPhotoOptions) {
		return this.client.messages.sendPhoto({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendAnimation(options: ChatSendAnimationOptions) {
		return this.client.messages.sendAnimation({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendAudio(options: ChatSendAudioOptions) {
		return this.client.messages.sendAudio({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendDocument(options: ChatSendDocumentOptions) {
		return this.client.messages.sendDocument({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVideo(options: ChatSendVideoOptions) {
		return this.client.messages.sendVideo({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVideoNote(options: ChatSendVideoNoteOptions) {
		return this.client.messages.sendVideoNote({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVoice(options: ChatSendVoiceOptions) {
		return this.client.messages.sendVoice({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendSticker(options: ChatSendStickerOptions) {
		return this.client.messages.sendSticker({ chatId: this[Structure.DataProperty].id, ...options });
	}
}

export type ChatSendTextOptions = Omit<SendTextOptions, 'chatId'>;
export type ChatForwardMessageOptions = Omit<ForwardMessageOptions, 'fromChatId'>;
export type ChatForwardMessagesOptions = Omit<ForwardMessagesOptions, 'fromChatId'>;
export type ChatCopyMessageOptions = Omit<CopyMessageOptions, 'fromChatId'>;
export type ChatCopyMessagesOptions = Omit<CopyMessagesOptions, 'fromChatId'>;
export type ChatSendPhotoOptions = Omit<SendPhotoOptions, 'chatId'>;
export type ChatSendAnimationOptions = Omit<SendAnimationOptions, 'chatId'>;
export type ChatSendAudioOptions = Omit<SendAudioOptions, 'chatId'>;
export type ChatSendDocumentOptions = Omit<SendDocumentOptions, 'chatId'>;
export type ChatSendVideoOptions = Omit<SendVideoOptions, 'chatId'>;
export type ChatSendVideoNoteOptions = Omit<SendVideoNoteOptions, 'chatId'>;
export type ChatSendVoiceOptions = Omit<SendVoiceOptions, 'chatId'>;
export type ChatSendStickerOptions = Omit<SendStickerOptions, 'chatId'>;
