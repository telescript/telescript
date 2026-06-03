import { APIBusinessMessageUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function business_message(client: Client, update: APIBusinessMessageUpdate) {
	const message = client.messages.resolve(update.business_message);
	return [ClientEvent.BusinessMessage, [message]] as const;
}
