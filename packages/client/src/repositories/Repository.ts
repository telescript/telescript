import { Client } from '../client/Client.js';

export abstract class Repository<Data, Structure> {
	public constructor(public client: Client) {}

	public abstract resolve(data: Data): Structure;
}
