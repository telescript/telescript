import { UniqueGift as ParentUniqueGift, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIUniqueGift } from '@telescript/api-types';

export class UniqueGift extends ParentUniqueGift {
	public constructor(
		public client: Client,
		data: APIUniqueGift,
	) {
		super(data);
	}

	public override get publisherChat() {
		const data = this[Structure.DataProperty].publisher_chat;
		return data ? this.client.chats.resolve(data) : null;
	}
}
