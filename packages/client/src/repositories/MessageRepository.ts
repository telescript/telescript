import { APIMessage, APIMethod, InputFile } from '@telescript/api-types';
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

