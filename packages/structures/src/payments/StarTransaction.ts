import { APIStarTransaction } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createTransactionPartner } from './index.js';

export class StarTransaction extends Structure<APIStarTransaction> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get amount() {
		return this[Structure.DataProperty].amount;
	}

	public get nanostarAmount() {
		return this[Structure.DataProperty].nanostar_amount ?? null;
	}

	public get dateUnixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get dateTimestamp() {
		return this.dateUnixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.dateTimestamp);
	}

	public get source() {
		const data = this[Structure.DataProperty].source;
		return data ? createTransactionPartner(data, this[Structure.OwnerProperty]) : null;
	}

	public get receiver() {
		const data = this[Structure.DataProperty].receiver;
		return data ? createTransactionPartner(data, this[Structure.OwnerProperty]) : null;
	}
}
