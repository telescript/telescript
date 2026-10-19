import { APICommunity } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class Community extends Structure<APICommunity> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}
}
