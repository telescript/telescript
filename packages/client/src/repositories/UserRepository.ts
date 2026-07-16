import { APIUser } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { User } from '../structures/users/index.js';

export class UserRepository extends Repository<APIUser, User> {
	public resolve(data: APIUser) {
		return new User(this.client, data);
	}
}
