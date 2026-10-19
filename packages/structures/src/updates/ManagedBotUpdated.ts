import { createStructure, type Resolve } from '../registry.js';
import { APIManagedBotUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class ManagedBotUpdated extends Structure<APIManagedBotUpdated> {
	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public get bot(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].bot);
	}
}
