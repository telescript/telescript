import { APIGuestMessageUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function guest_message(client: Client, update: APIGuestMessageUpdate) {
	const message = client.messages.resolve(update.guest_message);
	return [ClientEvent.GuestMessage, [message]] as const;
}
