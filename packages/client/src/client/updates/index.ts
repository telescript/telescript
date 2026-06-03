import { APIUpdate, isMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';
import * as Handlers from './handlers/index.js';

function handleUpdate(client: Client, update: APIUpdate) {
	if (isMessageUpdate(update)) {
		return Handlers.message(client, update);
	}

	return;
}

export function processUpdate(client: Client, update: APIUpdate) {
	const args = handleUpdate(client, update);
	if (args) client.emit(args[0], ...args[1]);
}

export type EventMap = {
	[Key in keyof typeof Handlers as ReturnType<(typeof Handlers)[Key]>[0]]: ReturnType<(typeof Handlers)[Key]>[1];
};
