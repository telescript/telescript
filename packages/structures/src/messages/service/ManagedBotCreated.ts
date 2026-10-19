import { APIManagedBotCreated } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ManagedBotCreated extends Structure<APIManagedBotCreated> {
	public get bot(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].bot);
	}
}
