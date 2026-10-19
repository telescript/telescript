import { APIDice } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class Dice extends Structure<APIDice> {
	public get emoji() {
		return this[Structure.DataProperty].emoji;
	}

	public get value() {
		return this[Structure.DataProperty].value;
	}
}
