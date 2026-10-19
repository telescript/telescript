import { APIPreparedInlineMessage } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class PreparedInlineMessage extends Structure<APIPreparedInlineMessage> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get expirationUnixTimestamp() {
		return this[Structure.DataProperty].expiration_date;
	}

	public get expirationTimestamp() {
		return this.expirationUnixTimestamp * 1000;
	}

	public get expirationDate() {
		return new Date(this.expirationTimestamp);
	}
}
