import { Giveaway as ParentGiveaway, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIGiveaway } from '@telescript/api-types';

export interface Giveaway extends ParentGiveaway {}

export class Giveaway extends ParentGiveaway {
	public constructor(
		public client: Client,
		data: APIGiveaway,
	) {
		super(data);
	}

	public get chats() {
		return this[Structure.DataProperty].chats.map((data) => this.client.chats.resolve(data));
	}
}
