import { APIMessageUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';
import { EventMapElement } from './index.js';

export function message(client: Client, update: APIMessageUpdate) {
	const message = client.messages.resolve(update.message);
	return [ClientEvent.Message, [message]] as const satisfies EventMapElement;
}
