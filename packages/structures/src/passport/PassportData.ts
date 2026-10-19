import { createStructure, type Resolve } from '../registry.js';
import { APIPassportData } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class PassportData extends Structure<APIPassportData> {
	public get data(): Resolve<'EncryptedPassportElement'>[] {
		return this[Structure.DataProperty].data.map((element) =>
			createStructure(this[Structure.OwnerProperty], 'EncryptedPassportElement', element),
		);
	}

	public get credentials(): Resolve<'EncryptedCredentials'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'EncryptedCredentials',
			this[Structure.DataProperty].credentials,
		);
	}
}
