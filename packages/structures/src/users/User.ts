import { APIUser } from '@telescript/api-types';
import { BaseUser } from './BaseUser';
import { Structure } from '../Structure';

export class User extends BaseUser<APIUser> {
	public get isBot() {
		return this[Structure.DataProperty].is_bot;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}
}
