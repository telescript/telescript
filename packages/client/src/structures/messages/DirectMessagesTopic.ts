import { DirectMessagesTopic as ParentDirectMessagesTopic, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIDirectMessagesTopic } from '@telescript/api-types';

export class DirectMessagesTopic extends ParentDirectMessagesTopic {
	public constructor(
		public client: Client,
		data: APIDirectMessagesTopic,
	) {
		super(data);
	}

	public get user() {
		const data = this[Structure.DataProperty].user;
		return data ? this.client.users.resolve(data) : null;
	}
}
