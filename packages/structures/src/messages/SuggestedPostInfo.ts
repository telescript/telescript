import { APISuggestedPostInfo, APISuggestedPostPrice } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class SuggestedPostPrice extends Structure<APISuggestedPostPrice> {
	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get amount() {
		return this[Structure.DataProperty].amount;
	}
}

export class SuggestedPostInfo extends Structure<APISuggestedPostInfo> {
	public get state() {
		return this[Structure.DataProperty].state;
	}

	public get price() {
		const data = this[Structure.DataProperty].price;
		return data ? new SuggestedPostPrice(data) : null;
	}

	public get sendUnixTimestamp() {
		return this[Structure.DataProperty].send_date ?? null;
	}

	public get sendTimestamp() {
		const ts = this[Structure.DataProperty].send_date;
		return ts ? ts * 1000 : null;
	}

	public get sendDate() {
		const ts = this[Structure.DataProperty].send_date;
		return ts ? new Date(ts * 1000) : null;
	}
}
