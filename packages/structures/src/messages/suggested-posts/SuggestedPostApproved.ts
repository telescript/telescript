import { APISuggestedPostApproved } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessage, type Message } from '../createMessage.js';
import { createStructure, type Resolve } from '../../registry.js';

export class SuggestedPostApproved extends Structure<APISuggestedPostApproved> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get price(): Resolve<'SuggestedPostPrice'> | null {
		const data = this[Structure.DataProperty].price;
		return data ? createStructure(this[Structure.OwnerProperty], 'SuggestedPostPrice', data) : null;
	}

	public get sendUnixTimestamp() {
		return this[Structure.DataProperty].send_date;
	}

	public get sendTimestamp() {
		return this.sendUnixTimestamp * 1000;
	}

	public get sendDate() {
		return new Date(this.sendTimestamp);
	}
}
