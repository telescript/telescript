import { APISuggestedPostPrice } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class SuggestedPostPrice extends Structure<APISuggestedPostPrice> {
	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get amount() {
		return this[Structure.DataProperty].amount;
	}
}
