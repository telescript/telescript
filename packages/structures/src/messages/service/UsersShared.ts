import { APIUsersShared } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class UsersShared extends Structure<APIUsersShared> {
	public get requestId() {
		return this[Structure.DataProperty].request_id;
	}

	public get users(): Resolve<'SharedUser'>[] {
		return this[Structure.DataProperty].users.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'SharedUser', data),
		);
	}
}
