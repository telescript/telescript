import { APIChatBoost } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChatBoostSource } from './boosts/index.js';

export class ChatBoost extends Structure<APIChatBoost> {
	public get boostId() {
		return this[Structure.DataProperty].boost_id;
	}

	public get addUnixTimestamp() {
		return this[Structure.DataProperty].add_date;
	}

	public get addTimestamp() {
		return this.addUnixTimestamp * 1000;
	}

	public get addDate() {
		return new Date(this.addTimestamp);
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

	public get source() {
		return createChatBoostSource(this[Structure.DataProperty].source, this[Structure.OwnerProperty]);
	}
}
