import { APISharedUser } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { PhotoSize } from '../media/PhotoSize.js';

export class SharedUser extends Structure<APISharedUser> {
	public get id() {
		return this[Structure.DataProperty].user_id;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name ?? null;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => new PhotoSize(item)) : null;
	}
}
