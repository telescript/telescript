import { APIEditedMessageUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function edited_message(client: Client, update: APIEditedMessageUpdate) {
	const message = client.messages.resolve(update.edited_message);
	return [ClientEvent.EditedMessage, [message]] as const;
}
