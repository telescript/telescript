import { APIMessage, MessageType } from '@telescript/api-types';
import { BaseMessage, Structure, type Message } from '@telescript/structures';
import type { SendTextOptions } from '../../../repositories/index.js';
import type { ClientMixin } from '../../ClientMixin.js';

export interface ReplyAction<
	Type extends MessageType = MessageType,
	Data extends APIMessage.Base = APIMessage.FromType<Type>,
>
	extends BaseMessage<Type, Data>, ClientMixin {}

export class ReplyAction {
	/**
	 * Sends a text message in reply to this message, in the same chat, topic and business connection.
	 */
	public async reply(options: MessageReplyOptions): Promise<Message> {
		const data = this[Structure.DataProperty];
		const message = await this.client.core.api.sendMessage({
			chat_id: data.chat.id,
			text: options.text,
			business_connection_id: data.business_connection_id,
			message_thread_id: data.is_topic_message ? data.message_thread_id : undefined,
			reply_parameters: { message_id: data.message_id },
		});
		return this.client.messages.resolve(message);
	}
}

export type MessageReplyOptions = Omit<SendTextOptions, 'chatId' | 'messageThreadId'>;
