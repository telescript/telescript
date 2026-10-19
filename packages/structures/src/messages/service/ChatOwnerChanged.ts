import { APIChatOwnerChanged } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ChatOwnerChanged extends Structure<APIChatOwnerChanged> {
	public get newOwner(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].new_owner);
	}
}
