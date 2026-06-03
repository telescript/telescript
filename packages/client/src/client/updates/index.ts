import { APIUpdate, isEditedMessageUpdate, isMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';
import { editedMessage, message } from './handlers/index.js';

export function processUpdate(client: Client, update: APIUpdate) {
	if (isMessageUpdate(update)) {
		return message(client, update);
	} else if (isEditedMessageUpdate(update)) {
		return editedMessage(client, update);
	}

	return;
}
