import { User as APIUser } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { User } from '../structures/User.js';

export class UserRepository extends Repository<APIUser, User> {
	public resolve(data: APIUser): User {
		return new User(this.client, data);
	}
}
