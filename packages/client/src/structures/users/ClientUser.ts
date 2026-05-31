import { APIMethod } from '@telescript/api-types';
import { BaseUser } from './BaseUser';
import { ClientUser as ParentClientUser } from '@telescript/structures';

export interface ClientUser extends ParentClientUser {}

export class ClientUser extends BaseUser<APIMethod.GetMe.Result> {
	static {
		this.mixin(ParentClientUser);
	}
}
