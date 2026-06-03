import { APIUser } from '@telescript/api-types';
import { BaseUser } from './BaseUser.js';
import { User as ParentUser } from '@telescript/structures';

export interface User extends ParentUser {}

export class User extends BaseUser<APIUser> {
	static {
		this.mixin(ParentUser);
	}
}
