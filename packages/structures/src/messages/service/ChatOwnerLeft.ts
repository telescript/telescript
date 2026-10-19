import { APIChatOwnerLeft } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ChatOwnerLeft extends Structure<APIChatOwnerLeft> {
	public get newOwner(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].new_owner;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}
}
