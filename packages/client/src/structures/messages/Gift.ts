import { Gift as ParentGift, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIGift } from '@telescript/api-types';
import { Sticker } from '../media/sticker/Sticker.js';

export class Gift extends ParentGift {
	public constructor(
		public client: Client,
		data: APIGift,
	) {
		super(data);
	}

	public get sticker() {
		return new Sticker(this.client, this[Structure.DataProperty].sticker);
	}

	public get publisherChat() {
		const data = this[Structure.DataProperty].publisher_chat;
		return data ? this.client.chats.resolve(data) : null;
	}
}
