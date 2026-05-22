import { APIUpdate, isMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';
import { message } from './message.js';

export function processUpdate(client: Client, update: APIUpdate) {
	if (isMessageUpdate(update)) {
		message(client, update);
	}
}
