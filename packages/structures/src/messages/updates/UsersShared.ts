import { APIUsersShared } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { SharedUser } from './SharedUser.js';

export class UsersShared extends Structure<APIUsersShared> {
	public get requestId() {
		return this[Structure.DataProperty].request_id;
	}

	public get users() {
		return this[Structure.DataProperty].users.map((data) => new SharedUser(data));
	}
}
