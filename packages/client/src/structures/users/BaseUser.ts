import { APIUser } from '@telescript/api-types';
import { BaseUser as ParentBaseUser } from '@telescript/structures';
import { Client } from '../../client';

export class BaseUser<Data extends APIUser> extends ParentBaseUser<Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
