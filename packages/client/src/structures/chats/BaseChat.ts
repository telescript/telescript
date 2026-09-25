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
	SendContactOptions,
	SendDocumentOptions,
	SendDiceOptions,
	SendLivePhotoOptions,
	SendLocationOptions,
	SendMediaGroupOptions,
	SendPhotoOptions,
	SendPollOptions,
	SendStickerOptions,
	SendTextOptions,
	SendVenueOptions,
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
		return this.client.messages.sendText({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async forwardMessage(options: ChatForwardMessageOptions) {
		return this.client.messages.forwardOne({ ...options, fromChatId: this[Structure.DataProperty].id });
	}

	public async forwardMessages(options: ChatForwardMessagesOptions) {
		return this.client.messages.forwardMany({ ...options, fromChatId: this[Structure.DataProperty].id });
	}

	public async copyMessage(options: ChatCopyMessageOptions) {
		return this.client.messages.copyOne({ ...options, fromChatId: this[Structure.DataProperty].id });
	}

	public async copyMessages(options: ChatCopyMessagesOptions) {
		return this.client.messages.copyMany({ ...options, fromChatId: this[Structure.DataProperty].id });
	}

	public async sendPhoto(options: ChatSendPhotoOptions) {
		return this.client.messages.sendPhoto({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendAnimation(options: ChatSendAnimationOptions) {
		return this.client.messages.sendAnimation({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendAudio(options: ChatSendAudioOptions) {
		return this.client.messages.sendAudio({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendDocument(options: ChatSendDocumentOptions) {
		return this.client.messages.sendDocument({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendVideo(options: ChatSendVideoOptions) {
		return this.client.messages.sendVideo({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendVideoNote(options: ChatSendVideoNoteOptions) {
		return this.client.messages.sendVideoNote({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendVoice(options: ChatSendVoiceOptions) {
		return this.client.messages.sendVoice({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendSticker(options: ChatSendStickerOptions) {
		return this.client.messages.sendSticker({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendLivePhoto(options: ChatSendLivePhotoOptions) {
		return this.client.messages.sendLivePhoto({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendMediaGroup(options: ChatSendMediaGroupOptions) {
		return this.client.messages.sendMediaGroup({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendLocation(options: ChatSendLocationOptions) {
		return this.client.messages.sendLocation({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendVenue(options: ChatSendVenueOptions) {
		return this.client.messages.sendVenue({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendContact(options: ChatSendContactOptions) {
		return this.client.messages.sendContact({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendPoll(options: ChatSendPollOptions) {
		return this.client.messages.sendPoll({ ...options, chatId: this[Structure.DataProperty].id });
	}

	public async sendDice(options: ChatSendDiceOptions) {
		return this.client.messages.sendDice({ ...options, chatId: this[Structure.DataProperty].id });
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
export type ChatSendLivePhotoOptions = Omit<SendLivePhotoOptions, 'chatId'>;
export type ChatSendMediaGroupOptions = Omit<SendMediaGroupOptions, 'chatId'>;
export type ChatSendLocationOptions = Omit<SendLocationOptions, 'chatId'>;
export type ChatSendVenueOptions = Omit<SendVenueOptions, 'chatId'>;
export type ChatSendContactOptions = Omit<SendContactOptions, 'chatId'>;
export type ChatSendPollOptions = Omit<SendPollOptions, 'chatId'>;
export type ChatSendDiceOptions = Omit<SendDiceOptions, 'chatId'>;
