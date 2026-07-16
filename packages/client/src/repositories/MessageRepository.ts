import {
	APIInlineKeyboardMarkup,
	APILinkPreviewOptions,
	APIMessage,
	APIMessageEntity,
	APIMethod,
	InputFile,
	PollType,
} from '@telescript/api-types';
import { Message } from '../structures/Message.js';
import { Repository } from './Repository.js';

export class MessageRepository extends Repository<APIMessage, Message> {
	public resolve(data: APIMessage) {
		return new Message(this.client, data);
	}

	public async sendText(options: SendTextOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendMessage.Params;

		const message = await this.client.core.api.sendMessage(params);
		return this.resolve(message);
	}

	public async forwardOne(options: ForwardMessageOptions) {
		const { chatId, messageThreadId, fromChatId, messageId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			from_chat_id: fromChatId,
			message_id: messageId,
			...rest,
		} satisfies APIMethod.ForwardMessage.Params;

		const message = await this.client.core.api.forwardMessage(params);
		return this.resolve(message);
	}

	public async forwardMany(options: ForwardMessagesOptions) {
		const { chatId, messageThreadId, fromChatId, messageIds, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			from_chat_id: fromChatId,
			message_ids: messageIds,
			...rest,
		} satisfies APIMethod.ForwardMessages.Params;

		const data = await this.client.core.api.forwardMessages(params);
		// TODO: replace with MessageId class
		return data.map((messageId) => {
			messageId: messageId.message_id;
		});
	}

	public async copyOne(options: CopyMessageOptions) {
		const { chatId, messageThreadId, fromChatId, messageId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			from_chat_id: fromChatId,
			message_id: messageId,
			...rest,
		} satisfies APIMethod.CopyMessage.Params;

		const data = await this.client.core.api.copyMessage(params);
		// TODO: replace with MessageId class
		return { messageId: data.message_id };
	}

	public async copyMany(options: CopyMessagesOptions) {
		const { chatId, messageThreadId, fromChatId, messageIds, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			from_chat_id: fromChatId,
			message_ids: messageIds,
			...rest,
		} satisfies APIMethod.CopyMessages.Params;

		const data = await this.client.core.api.copyMessages(params);
		// TODO: replace with MessageId class
		return data.map((messageId) => {
			messageId: messageId.message_id;
		});
	}

	public async sendPhoto(options: SendPhotoOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendPhoto.Params;

		const message = await this.client.core.api.sendPhoto(params);
		return this.resolve(message);
	}

	public async sendAnimation(options: SendAnimationOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendAnimation.Params;

		const message = await this.client.core.api.sendAnimation(params);
		return this.resolve(message);
	}

	public async sendAudio(options: SendAudioOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendAudio.Params;

		const message = await this.client.core.api.sendAudio(params);
		return this.resolve(message);
	}

	public async sendDocument(options: SendDocumentOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendDocument.Params;

		const message = await this.client.core.api.sendDocument(params);
		return this.resolve(message);
	}

	public async sendVideo(options: SendVideoOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendVideo.Params;

		const message = await this.client.core.api.sendVideo(params);
		return this.resolve(message);
	}

	public async sendVideoNote(options: SendVideoNoteOptions) {
		const { chatId, messageThreadId, videoNote, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			video_note: videoNote,
			...rest,
		} satisfies APIMethod.SendVideoNote.Params;

		const message = await this.client.core.api.sendVideoNote(params);
		return this.resolve(message);
	}

	public async sendVoice(options: SendVoiceOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendVoice.Params;

		const message = await this.client.core.api.sendVoice(params);
		return this.resolve(message);
	}

	public async sendSticker(options: SendStickerOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendSticker.Params;

		const message = await this.client.core.api.sendSticker(params);
		return this.resolve(message);
	}

	public async sendLivePhoto(options: SendLivePhotoOptions) {
		const { chatId, messageThreadId, livePhoto, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			live_photo: livePhoto,
			...rest,
		} satisfies APIMethod.SendLivePhoto.Params;

		const message = await this.client.core.api.sendLivePhoto(params);
		return this.resolve(message);
	}

	public async sendMediaGroup(options: SendMediaGroupOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendMediaGroup.Params;

		const messages = await this.client.core.api.sendMediaGroup(params);
		return (messages as APIMessage[]).map((message) => this.resolve(message));
	}

	public async sendLocation(options: SendLocationOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendLocation.Params;

		const message = await this.client.core.api.sendLocation(params);
		return this.resolve(message);
	}

	public async sendVenue(options: SendVenueOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendVenue.Params;

		const message = await this.client.core.api.sendVenue(params);
		return this.resolve(message);
	}

	public async sendContact(options: SendContactOptions) {
		const { chatId, messageThreadId, phoneNumber, firstName, lastName, vcard, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			phone_number: phoneNumber,
			first_name: firstName,
			last_name: lastName,
			vcard,
			...rest,
		} satisfies APIMethod.SendContact.Params;

		const message = await this.client.core.api.sendContact(params);
		return this.resolve(message);
	}

	public async sendPoll(options: SendPollOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendPoll.Params;

		const message = await this.client.core.api.sendPoll(params);
		return this.resolve(message);
	}

	public async sendDice(options: SendDiceOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendDice.Params;

		const message = await this.client.core.api.sendDice(params);
		return this.resolve(message);
	}

	public async editMessageText(options: EditMessageTextOptions) {
		const { chatId, messageId, inlineMessageId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
			inline_message_id: inlineMessageId,
			...rest,
		} satisfies APIMethod.EditMessageText.Params;

		const result = await this.client.core.api.editMessageText(params);
		return result === true ? true : this.resolve(result);
	}

	public async editMessageCaption(options: EditMessageCaptionOptions) {
		const { chatId, messageId, inlineMessageId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
			inline_message_id: inlineMessageId,
			...rest,
		} satisfies APIMethod.EditMessageCaption.Params;

		const result = await this.client.core.api.editMessageCaption(params);
		return result === true ? true : this.resolve(result);
	}

	public async editMessageMedia(options: EditMessageMediaOptions) {
		const { chatId, messageId, inlineMessageId, media, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
			inline_message_id: inlineMessageId,
			media,
			...rest,
		} satisfies APIMethod.EditMessageMedia.Params;

		const result = await this.client.core.api.editMessageMedia(params);
		return result === true ? true : this.resolve(result);
	}

	public async editMessageReplyMarkup(options: EditMessageReplyMarkupOptions) {
		const { chatId, messageId, inlineMessageId, replyMarkup } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
			inline_message_id: inlineMessageId,
			reply_markup: replyMarkup,
		} satisfies APIMethod.EditMessageReplyMarkup.Params;

		const result = await this.client.core.api.editMessageReplyMarkup(params);
		return result === true ? true : this.resolve(result);
	}

	public async stopPoll(options: StopPollOptions) {
		const { chatId, messageId, replyMarkup } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
			reply_markup: replyMarkup,
		} satisfies APIMethod.StopPoll.Params;

		return await this.client.core.api.stopPoll(params);
	}

	public async deleteMessage(options: DeleteMessageOptions) {
		const { chatId, messageId } = options;
		const params = {
			chat_id: chatId,
			message_id: messageId,
		} satisfies APIMethod.DeleteMessage.Params;

		return await this.client.core.api.deleteMessage(params);
	}

	public async deleteMessages(options: DeleteMessagesOptions) {
		const { chatId, messageIds } = options;
		const params = {
			chat_id: chatId,
			message_ids: messageIds,
		} satisfies APIMethod.DeleteMessages.Params;

		return await this.client.core.api.deleteMessages(params);
	}
}

export interface SendTextOptions {
	chatId: number | string;
	messageThreadId?: number;
	text: string;
}

export interface ForwardMessageOptions {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	messageId: number;
}

export interface ForwardMessagesOptions {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	messageIds: number[];
}

export interface CopyMessageOptions {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	messageId: number;
}

export interface CopyMessagesOptions {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	messageIds: number[];
}

export interface SendPhotoOptions {
	chatId: number | string;
	messageThreadId?: number;
	photo: InputFile | string;
}

export interface SendAnimationOptions {
	chatId: number | string;
	messageThreadId?: number;
	animation: InputFile | string;
}

export interface SendAudioOptions {
	chatId: number | string;
	messageThreadId?: number;
	audio: InputFile | string;
}

export interface SendDocumentOptions {
	chatId: number | string;
	messageThreadId?: number;
	document: InputFile | string;
}

export interface SendVideoOptions {
	chatId: number | string;
	messageThreadId?: number;
	video: InputFile | string;
}

export interface SendVideoNoteOptions {
	chatId: number | string;
	messageThreadId?: number;
	videoNote: InputFile | string;
}

export interface SendVoiceOptions {
	chatId: number | string;
	messageThreadId?: number;
	voice: InputFile | string;
}

export interface SendStickerOptions {
	chatId: number | string;
	messageThreadId?: number;
	sticker: InputFile | string;
}

export interface SendLivePhotoOptions {
	chatId: number | string;
	messageThreadId?: number;
	livePhoto: InputFile | string;
}

export interface SendMediaGroupOptions {
	chatId: number | string;
	messageThreadId?: number;
	media: unknown[];
}

export interface SendLocationOptions {
	chatId: number | string;
	messageThreadId?: number;
	latitude: number;
	longitude: number;
	horizontalAccuracy?: number;
	livePeriod?: number;
	heading?: number;
	proximityAlertRadius?: number;
}

export interface SendVenueOptions {
	chatId: number | string;
	messageThreadId?: number;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquareId?: string;
	foursquareType?: string;
	googlePlaceId?: string;
	googlePlaceType?: string;
}

export interface SendContactOptions {
	chatId: number | string;
	messageThreadId?: number;
	phoneNumber: string;
	firstName: string;
	lastName?: string;
	vcard?: string;
}

export interface SendPollOptions {
	chatId: number | string;
	messageThreadId?: number;
	question: string;
	questionParseMode?: string;
	questionEntities?: APIMessageEntity[];
	options: string[];
	isAnonymous?: boolean;
	type?: PollType;
	allowsMultipleAnswers?: boolean;
	correctOptionId?: number;
	explanation?: string;
	explanationParseMode?: string;
	explanationEntities?: APIMessageEntity[];
	openPeriod?: number;
	closeDate?: number;
	isClosed?: boolean;
}

export interface SendDiceOptions {
	chatId: number | string;
	messageThreadId?: number;
	emoji?: string;
}

export interface EditMessageTextOptions {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	text?: string;
	parseMode?: string;
	entities?: APIMessageEntity[];
	linkPreviewOptions?: APILinkPreviewOptions;
	richMessage?: unknown;
	replyMarkup?: APIInlineKeyboardMarkup;
}

export interface EditMessageCaptionOptions {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	caption?: string;
	parseMode?: string;
	captionEntities?: APIMessageEntity[];
	showCaptionAboveMedia?: boolean;
	replyMarkup?: APIInlineKeyboardMarkup;
}

export interface EditMessageMediaOptions {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	media: unknown;
	replyMarkup?: APIInlineKeyboardMarkup;
}

export interface EditMessageReplyMarkupOptions {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	replyMarkup?: APIInlineKeyboardMarkup;
}

export interface StopPollOptions {
	chatId: number | string;
	messageId: number;
	replyMarkup?: APIInlineKeyboardMarkup;
}

export interface DeleteMessageOptions {
	chatId: number | string;
	messageId: number;
}

export interface DeleteMessagesOptions {
	chatId: number | string;
	messageIds: number[];
}
