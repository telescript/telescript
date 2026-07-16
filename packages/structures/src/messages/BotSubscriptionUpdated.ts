import { APIBotSubscriptionUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { User } from '../users/User.js';

export class BotSubscriptionUpdated extends Structure<APIBotSubscriptionUpdated> {
	public get user() {
		return new User(this[Structure.DataProperty].user);
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get state() {
		return this[Structure.DataProperty].state;
	}
}
