import { APIDirectMessagesTopic } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class DirectMessagesTopic extends Structure<APIDirectMessagesTopic> {
	public get id() {
		return this[Structure.DataProperty].topic_id;
	}

	public get user(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}
}
