import { APIChatShared } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ChatShared extends Structure<APIChatShared> {
	public get requestId() {
		return this[Structure.DataProperty].request_id;
	}

	public get chatId() {
		return this[Structure.DataProperty].chat_id;
	}

	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get photo(): Resolve<'PhotoSize'>[] | null {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', item)) : null;
	}
}
