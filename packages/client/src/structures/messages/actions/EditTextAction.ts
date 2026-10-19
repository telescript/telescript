import { Structure, TextMessage, type Message } from '@telescript/structures';
import type { EditMessageTextOptions } from '../../../repositories/index.js';
import type { ClientMixin } from '../../ClientMixin.js';

export interface EditTextAction extends TextMessage, ClientMixin {}

/**
 * Edits the text of a text message.
 */
export class EditTextAction {
	/**
	 * Replaces the text of this message. Resolves to the edited message.
	 */
	public async editText(options: MessageEditTextOptions): Promise<Message> {
		const data = this[Structure.DataProperty];
		const result = await this.client.messages.editMessageText({
			...options,
			chatId: data.chat.id,
			messageId: data.message_id,
		});
		// `true` is only returned for inline messages, which have no chat.
		if (result === true) throw new Error('Telegram returned no message for a chat message');
		return result;
	}
}

export type MessageEditTextOptions = Omit<EditMessageTextOptions, 'chatId' | 'messageId' | 'inlineMessageId'> & {
	text: string;
};
