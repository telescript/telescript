import { APILoginURL } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class LoginURL extends Structure<APILoginURL> {
	public get url() {
		return this[Structure.DataProperty].url;
	}

	public get forwardText() {
		return this[Structure.DataProperty].forward_text ?? null;
	}

	public get botUsername() {
		return this[Structure.DataProperty].bot_username ?? null;
	}

	public get requestWriteAccess() {
		return this[Structure.DataProperty].request_write_access ?? false;
	}
}
