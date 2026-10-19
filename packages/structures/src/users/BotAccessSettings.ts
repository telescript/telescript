import { createStructure, type Resolve } from '../registry.js';
import { APIBotAccessSettings } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BotAccessSettings extends Structure<APIBotAccessSettings> {
	public get isAccessRestricted() {
		return this[Structure.DataProperty].is_access_restricted;
	}

	public get addedUsers(): Resolve<'User'>[] | null {
		const data = this[Structure.DataProperty].added_users;
		return data ? data.map((user) => createStructure(this[Structure.OwnerProperty], 'User', user)) : null;
	}
}
