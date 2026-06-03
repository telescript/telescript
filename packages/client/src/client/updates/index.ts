import { APIUpdate } from '@telescript/api-types';
import { Client } from '../Client.js';
import * as Handlers from './handlers/index.js';

export function processUpdate(client: Client, update: APIUpdate) {
	for (const name of Object.keys(update)) {
		if (name === 'update_id') continue;
		// @ts-expect-error ts(2345)
		if (name in Handlers) return Handlers[name as keyof typeof Handlers](client, update);
	}

	return;
}
