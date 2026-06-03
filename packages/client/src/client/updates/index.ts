import { APIUpdate, isMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';
import { message } from './handlers/index.js';

export function processUpdate(client: Client, update: APIUpdate) {
	if (isMessageUpdate(update)) {
		return message(client, update);
	}

	return;
}
