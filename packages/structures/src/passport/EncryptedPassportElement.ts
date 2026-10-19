import { createStructure, type Resolve } from '../registry.js';
import { APIEncryptedPassportElement } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class EncryptedPassportElement extends Structure<APIEncryptedPassportElement> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get data() {
		return this[Structure.DataProperty].data ?? null;
	}

	public get phoneNumber() {
		return this[Structure.DataProperty].phone_number ?? null;
	}

	public get email() {
		return this[Structure.DataProperty].email ?? null;
	}

	public get files(): Resolve<'PassportFile'>[] | null {
		const data = this[Structure.DataProperty].files;
		return data ? data.map((file) => createStructure(this[Structure.OwnerProperty], 'PassportFile', file)) : null;
	}

	public get frontSide(): Resolve<'PassportFile'> | null {
		const data = this[Structure.DataProperty].front_side;
		return data ? createStructure(this[Structure.OwnerProperty], 'PassportFile', data) : null;
	}

	public get reverseSide(): Resolve<'PassportFile'> | null {
		const data = this[Structure.DataProperty].reverse_side;
		return data ? createStructure(this[Structure.OwnerProperty], 'PassportFile', data) : null;
	}

	public get selfie(): Resolve<'PassportFile'> | null {
		const data = this[Structure.DataProperty].selfie;
		return data ? createStructure(this[Structure.OwnerProperty], 'PassportFile', data) : null;
	}

	public get translation(): Resolve<'PassportFile'>[] | null {
		const data = this[Structure.DataProperty].translation;
		return data ? data.map((file) => createStructure(this[Structure.OwnerProperty], 'PassportFile', file)) : null;
	}

	public get hash() {
		return this[Structure.DataProperty].hash;
	}
}
