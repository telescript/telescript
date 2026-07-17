import { APIDirectMessagesTopic } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { User } from '../../users/index.js';

export class DirectMessagesTopic extends Structure<APIDirectMessagesTopic> {
	public get id() {
		return this[Structure.DataProperty].topic_id;
	}

	public get user() {
		const data = this[Structure.DataProperty].user;
		return data ? new User(data) : null;
	}
}
