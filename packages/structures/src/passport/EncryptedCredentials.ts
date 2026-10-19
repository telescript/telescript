import { APIEncryptedCredentials } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class EncryptedCredentials extends Structure<APIEncryptedCredentials> {
	public get data() {
		return this[Structure.DataProperty].data;
	}

	public get hash() {
		return this[Structure.DataProperty].hash;
	}

	public get secret() {
		return this[Structure.DataProperty].secret;
	}
}
