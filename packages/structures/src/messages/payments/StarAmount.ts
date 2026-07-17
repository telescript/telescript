import { APIStarAmount } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class StarAmount extends Structure<APIStarAmount> {
	public get amount() {
		return this[Structure.DataProperty].amount;
	}

	public get nanostarAmount() {
		return this[Structure.DataProperty].nanostar_amount ?? null;
	}
}
