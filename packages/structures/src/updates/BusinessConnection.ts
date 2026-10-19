import { createStructure, type Resolve } from '../registry.js';
import { APIBusinessConnection } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BusinessConnection extends Structure<APIBusinessConnection> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public get userChatId() {
		return this[Structure.DataProperty].user_chat_id;
	}

	public get unixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get timestamp() {
		return this.unixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.timestamp);
	}

	public get rights(): Resolve<'BusinessBotRights'> | null {
		const data = this[Structure.DataProperty].rights;
		return data ? createStructure(this[Structure.OwnerProperty], 'BusinessBotRights', data) : null;
	}

	public get isEnabled() {
		return this[Structure.DataProperty].is_enabled;
	}
}
