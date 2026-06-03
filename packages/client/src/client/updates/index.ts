import { APIUpdate, UpdateName } from '@telescript/api-types';
import { Client } from '../Client.js';
import * as Handlers from './handlers/index.js';

function hasHandler(name: string): name is keyof typeof Handlers {
	return name in Handlers;
}

export type UpdateHandlers = {
	[Name in UpdateName]: (client: Client, update: Extract<APIUpdate, { [Key in Name]: unknown }>) => unknown;
};

export function processUpdate(client: Client, update: APIUpdate) {
	for (const name of Object.keys(update)) {
		if (name === 'update_id') continue;
		if (hasHandler(name)) {
			const handler = (Handlers satisfies UpdateHandlers)[name];
			// @ts-expect-error SAFTY: just checked that `handler` exists and has the right type
			return handler(client, update);
		}
	}

	return;
}
