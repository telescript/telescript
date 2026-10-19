import { APICommunityChatJoined } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class CommunityChatJoined extends Structure<APICommunityChatJoined> {
	public get community(): Resolve<'Community'> {
		return createStructure(this[Structure.OwnerProperty], 'Community', this[Structure.DataProperty].community);
	}
}
