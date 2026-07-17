import { BotSubscriptionUpdated as ParentBotSubscriptionUpdated, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIBotSubscriptionUpdated } from '@telescript/api-types';

export class BotSubscriptionUpdated extends ParentBotSubscriptionUpdated {
	public constructor(
		public client: Client,
		data: APIBotSubscriptionUpdated,
	) {
		super(data);
	}

	public get user() {
		return this.client.users.resolve(this[Structure.DataProperty].user);
	}
}
