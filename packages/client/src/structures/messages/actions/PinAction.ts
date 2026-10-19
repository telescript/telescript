import { APIMessage, MessageType } from '@telescript/api-types';
import { BaseMessage, Structure } from '@telescript/structures';
import type { ClientMixin } from '../../ClientMixin.js';

export interface PinAction<
	Type extends MessageType = MessageType,
	Data extends APIMessage.Base = APIMessage.FromType<Type>,
>
	extends BaseMessage<Type, Data>, ClientMixin {}

/**
 * Pins and unpins this message in its chat.
 */
export class PinAction {
	/**
	 * Pins this message. In groups and channels the bot needs the right to pin messages.
	 */
	public async pin(options: MessagePinOptions = {}): Promise<true> {
		const data = this[Structure.DataProperty];
		return this.client.messages.pin({
			...options,
			businessConnectionId: data.business_connection_id,
			chatId: data.chat.id,
			messageId: data.message_id,
		});
	}

	/**
	 * Unpins this message.
	 */
	public async unpin(): Promise<true> {
		const data = this[Structure.DataProperty];
		return this.client.messages.unpin({
			businessConnectionId: data.business_connection_id,
			chatId: data.chat.id,
			messageId: data.message_id,
		});
	}
}

export interface MessagePinOptions {
	/**
	 * Pins silently, without notifying the chat members.
	 */
	disableNotification?: boolean;
}
