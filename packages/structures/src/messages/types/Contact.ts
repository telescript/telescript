import { APIContact } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class Contact extends Structure<APIContact> {
	public get phoneNumber() {
		return this[Structure.DataProperty].phone_number;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get userId() {
		return this[Structure.DataProperty].user_id ?? null;
	}

	public get vcard() {
		return this[Structure.DataProperty].vcard ?? null;
	}
}
