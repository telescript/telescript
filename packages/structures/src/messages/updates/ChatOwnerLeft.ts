import { APIChatOwnerLeft } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { User } from '../../users/User.js';

export class ChatOwnerLeft extends Structure<APIChatOwnerLeft> {
	public get newOwner() {
		const data = this[Structure.DataProperty].new_owner;
		return data ? new User(data) : null;
	}
}
