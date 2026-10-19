import { APIMessage, MessageType } from '@telescript/api-types';
import { BaseMessage, Structure, type Message } from '@telescript/structures';
import type { CopyMessageOptions, ForwardMessageOptions } from '../../../repositories/index.js';
import type { ClientMixin } from '../../ClientMixin.js';

export interface ForwardAction<
	Type extends MessageType = MessageType,
	Data extends APIMessage.Base = APIMessage.FromType<Type>,
>
	extends BaseMessage<Type, Data>, ClientMixin {}

/**
 * Forwards, copies and deletes this message.
 */
export class ForwardAction {
	/**
	 * Forwards this message to another chat, with a link to the original.
	 */
	public async forward(options: MessageForwardOptions): Promise<Message> {
		const data = this[Structure.DataProperty];
		return this.client.messages.forwardOne({ ...options, fromChatId: data.chat.id, messageId: data.message_id });
	}

	/**
	 * Sends a copy of this message to another chat, without a link to the original.
	 */
	public async copy(options: MessageCopyOptions): Promise<{ messageId: number }> {
		const data = this[Structure.DataProperty];
		return this.client.messages.copyOne({ ...options, fromChatId: data.chat.id, messageId: data.message_id });
	}

	/**
	 * Deletes this message. Telegram limits which messages a bot can delete (e.g. messages of others only as an
	 * administrator, and only within 48 hours).
	 */
	public async delete(): Promise<true> {
		const data = this[Structure.DataProperty];
		return this.client.messages.deleteMessage({ chatId: data.chat.id, messageId: data.message_id });
	}
}

export type MessageForwardOptions = Omit<ForwardMessageOptions, 'fromChatId' | 'messageId'>;
export type MessageCopyOptions = Omit<CopyMessageOptions, 'fromChatId' | 'messageId'>;
