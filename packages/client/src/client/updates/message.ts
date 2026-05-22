import { APIMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';

export function message(client: Client, update: APIMessageUpdate) {
	const message = client.messages.resolve(update.message);
	client.emit('message', message);
}
