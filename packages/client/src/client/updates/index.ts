import { APIUpdate, isMessageUpdate } from '@telescript/api-types';
import { Client } from '../Client';
import { message } from './message';

export function processUpdate(client: Client, update: APIUpdate) {
	if (isMessageUpdate(update)) {
		message(client, update);
	}
}
