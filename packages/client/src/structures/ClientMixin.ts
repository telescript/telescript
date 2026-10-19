import { defaultOwner, Structure, type StructureOwner } from '@telescript/structures';
import type { Client } from '../client/Client.js';

export interface ClientMixin {
	readonly [Structure.OwnerProperty]: StructureOwner;
}

/**
 * Gives a structure created by a client access to that client.
 */
export class ClientMixin {
	public get client(): Client {
		const owner = this[Structure.OwnerProperty];
		if (owner === defaultOwner) throw new Error('This structure was not created by a client');
		return owner as Client;
	}
}
