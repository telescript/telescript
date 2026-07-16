import { APIChat, APIMethod, ChatType, InputFile } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { BaseChat, ChannelChat, Chat, GroupChat, PrivateChat, SupergroupChat } from '../structures/index.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat): Chat {
		switch (data.type) {
			case ChatType.Channel:
				return new ChannelChat(this.client, data);
			case ChatType.Group:
				return new GroupChat(this.client, data);
			case ChatType.Private:
				return new PrivateChat(this.client, data);
			case ChatType.Supergroup:
				return new SupergroupChat(this.client, data);
			default:
				return new BaseChat<never>(this.client, data);
		}
	}

	public async sendText(options: SendTextOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendMessage.Params;

		const message = await this.client.core.api.sendMessage(params);
		return this.client.messages.resolve(message);
	}

	public async forwardMessage(options: ForwardMessageOptions) {
		const { chatId, messageThreadId, fromChatId, messageId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			from_chat_id: fromChatId,
			message_id: messageId,
			...rest,
		} satisfies APIMethod.ForwardMessage.Params;

		const message = await this.client.core.api.forwardMessage(params);
		return this.client.messages.resolve(message);
	}

	public async forwardMessages(options: ForwardMessagesOptions) {
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

	public async copyMessage(options: CopyMessageOptions) {
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

	public async copyMessages(options: CopyMessagesOptions) {
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
		return this.client.messages.resolve(message);
	}

	public async sendAnimation(options: SendAnimationOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendAnimation.Params;

		const message = await this.client.core.api.sendAnimation(params);
		return this.client.messages.resolve(message);
	}

	public async sendAudio(options: SendAudioOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendAudio.Params;

		const message = await this.client.core.api.sendAudio(params);
		return this.client.messages.resolve(message);
	}

	public async sendDocument(options: SendDocumentOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendDocument.Params;

		const message = await this.client.core.api.sendDocument(params);
		return this.client.messages.resolve(message);
	}

	public async sendVideo(options: SendVideoOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendVideo.Params;

		const message = await this.client.core.api.sendVideo(params);
		return this.client.messages.resolve(message);
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
		return this.client.messages.resolve(message);
	}

	public async sendVoice(options: SendVoiceOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendVoice.Params;

		const message = await this.client.core.api.sendVoice(params);
		return this.client.messages.resolve(message);
	}

	public async sendSticker(options: SendStickerOptions) {
		const { chatId, messageThreadId, ...rest } = options;
		const params = {
			chat_id: chatId,
			message_thread_id: messageThreadId,
			...rest,
		} satisfies APIMethod.SendSticker.Params;

		const message = await this.client.core.api.sendSticker(params);
		return this.client.messages.resolve(message);
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
