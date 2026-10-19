import { createStructure, type Resolve } from '../../registry.js';
import { APIBusinessIntro } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BusinessIntro extends Structure<APIBusinessIntro> {
	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}

	public get message() {
		return this[Structure.DataProperty].message ?? null;
	}

	public get sticker(): Resolve<'Sticker'> | null {
		const data = this[Structure.DataProperty].sticker;
		return data ? createStructure(this[Structure.OwnerProperty], 'Sticker', data) : null;
	}
}
