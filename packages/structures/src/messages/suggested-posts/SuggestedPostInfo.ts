import { APISuggestedPostInfo } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class SuggestedPostInfo extends Structure<APISuggestedPostInfo> {
	public get state() {
		return this[Structure.DataProperty].state;
	}

	public get price(): Resolve<'SuggestedPostPrice'> | null {
		const data = this[Structure.DataProperty].price;
		return data ? createStructure(this[Structure.OwnerProperty], 'SuggestedPostPrice', data) : null;
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
