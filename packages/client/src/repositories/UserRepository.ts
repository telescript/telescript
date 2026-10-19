import { APIUser } from '@telescript/api-types';
import { createStructure, type Resolve } from '@telescript/structures';
import { Repository } from './Repository.js';

export class UserRepository extends Repository<APIUser, Resolve<'User'>> {
	public resolve(data: APIUser): Resolve<'User'> {
		return createStructure(this.client, 'User', data);
	}
}
