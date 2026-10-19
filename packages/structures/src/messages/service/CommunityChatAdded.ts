import { APICommunityChatAdded } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class CommunityChatAdded extends Structure<APICommunityChatAdded> {
	public get community(): Resolve<'Community'> {
		return createStructure(this[Structure.OwnerProperty], 'Community', this[Structure.DataProperty].community);
	}
}
