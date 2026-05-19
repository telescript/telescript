import { Client } from '../Client.js';

export abstract class Repository<Data, Structure> {
	public constructor(public client: Client) {}

	public abstract resolve(data: Data): Structure;
}
