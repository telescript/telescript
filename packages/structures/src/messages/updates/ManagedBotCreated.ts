import { APIManagedBotCreated } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { User } from '../../users/User.js';

export class ManagedBotCreated extends Structure<APIManagedBotCreated> {
	public get bot() {
		return new User(this[Structure.DataProperty].bot);
	}
}
