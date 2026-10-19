import { APIBotSubscriptionUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createStructure, type Resolve } from '../registry.js';

export class BotSubscriptionUpdated extends Structure<APIBotSubscriptionUpdated> {
	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public get invoicePayload() {
		return this[Structure.DataProperty].invoice_payload;
	}

	public get state() {
		return this[Structure.DataProperty].state;
	}
}
