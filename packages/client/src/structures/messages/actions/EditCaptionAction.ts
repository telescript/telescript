import { CaptionedMessageMixin, Structure, type Message } from '@telescript/structures';
import type { EditMessageCaptionOptions } from '../../../repositories/index.js';
import type { ClientMixin } from '../../ClientMixin.js';

export interface EditCaptionAction extends CaptionedMessageMixin, ClientMixin {}

/**
 * Edits the caption of a message with media.
 */
export class EditCaptionAction {
	/**
	 * Replaces the caption of this message (or removes it, without `caption`). Resolves to the edited message.
	 */
	public async editCaption(options: MessageEditCaptionOptions): Promise<Message> {
		const data = this[Structure.DataProperty];
		const result = await this.client.messages.editMessageCaption({
			...options,
			chatId: data.chat.id,
			messageId: data.message_id,
		});
		// `true` is only returned for inline messages, which have no chat.
		if (result === true) throw new Error('Telegram returned no message for a chat message');
		return result;
	}
}

export type MessageEditCaptionOptions = Omit<EditMessageCaptionOptions, 'chatId' | 'messageId' | 'inlineMessageId'>;
