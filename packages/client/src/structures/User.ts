import { User as APIUser } from '@telescript/api-types';
import { Structure } from './Structure.js';

export class User extends Structure<APIUser> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get isBot() {
		return this[Structure.DataProperty].is_bot;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get languageCode() {
		return this[Structure.DataProperty].language_code ?? null;
	}

	public get isPremium() {
		return this[Structure.DataProperty].is_premium ?? false;
	}

	public get addedToAttachmentMenu() {
		return this[Structure.DataProperty].added_to_attachment_menu ?? false;
	}
}
