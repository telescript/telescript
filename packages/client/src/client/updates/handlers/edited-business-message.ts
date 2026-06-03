import { APIEditedBusinessMessageUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function edited_business_message(client: Client, update: APIEditedBusinessMessageUpdate) {
	const message = client.messages.resolve(update.edited_business_message);
	return [ClientEvent.EditedBusinessMessage, [message]] as const;
}
