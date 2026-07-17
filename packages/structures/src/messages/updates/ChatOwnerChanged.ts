import { APIChatOwnerChanged } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { User } from '../../users/User.js';

export class ChatOwnerChanged extends Structure<APIChatOwnerChanged> {
	public get newOwner() {
		return new User(this[Structure.DataProperty].new_owner);
	}
}
