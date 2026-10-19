import { createStructure, type Resolve } from '../registry.js';
import { APIStarTransactions } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class StarTransactions extends Structure<APIStarTransactions> {
	public get transactions(): Resolve<'StarTransaction'>[] {
		return this[Structure.DataProperty].transactions.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'StarTransaction', data),
		);
	}
}
