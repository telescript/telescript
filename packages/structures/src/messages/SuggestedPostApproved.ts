import { APISuggestedPostApproved } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Message } from './Message.js';
import { SuggestedPostPrice } from './SuggestedPostPrice.js';

export class SuggestedPostApproved extends Structure<APISuggestedPostApproved> {
	public get suggestedPostMessage(): Message | null {
		const data = this[Structure.DataProperty].suggested_post_message;
		return data ? new Message(data) : null;
	}

	public get price() {
		const data = this[Structure.DataProperty].price;
		return data ? new SuggestedPostPrice(data) : null;
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
