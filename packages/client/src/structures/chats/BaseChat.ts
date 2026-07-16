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
} from '../../repositories/ChatRepository.js';

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
		return this.client.chats.sendText({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async forwardMessage(options: ChatForwardMessageOptions) {
		return this.client.chats.forwardMessage({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async forwardMessages(options: ChatForwardMessagesOptions) {
		return this.client.chats.forwardMessages({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async copyMessage(options: ChatCopyMessageOptions) {
		return this.client.chats.copyMessage({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async copyMessages(options: ChatCopyMessagesOptions) {
		return this.client.chats.copyMessages({ fromChatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendPhoto(options: ChatSendPhotoOptions) {
		return this.client.chats.sendPhoto({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendAnimation(options: ChatSendAnimationOptions) {
		return this.client.chats.sendAnimation({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendAudio(options: ChatSendAudioOptions) {
		return this.client.chats.sendAudio({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendDocument(options: ChatSendDocumentOptions) {
		return this.client.chats.sendDocument({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVideo(options: ChatSendVideoOptions) {
		return this.client.chats.sendVideo({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVideoNote(options: ChatSendVideoNoteOptions) {
		return this.client.chats.sendVideoNote({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendVoice(options: ChatSendVoiceOptions) {
		return this.client.chats.sendVoice({ chatId: this[Structure.DataProperty].id, ...options });
	}

	public async sendSticker(options: ChatSendStickerOptions) {
		return this.client.chats.sendSticker({ chatId: this[Structure.DataProperty].id, ...options });
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
