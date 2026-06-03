import { APIUser } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseUser<Data extends APIUser> extends Structure<Data> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
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
