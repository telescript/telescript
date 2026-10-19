import { createStructure, type Resolve } from '../registry.js';
import { APIUniqueGiftModel } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class UniqueGiftModel extends Structure<APIUniqueGiftModel> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get sticker(): Resolve<'Sticker'> {
		return createStructure(this[Structure.OwnerProperty], 'Sticker', this[Structure.DataProperty].sticker);
	}

	public get rarityPerMille() {
		return this[Structure.DataProperty].rarity_per_mille;
	}

	public get rarity() {
		return this[Structure.DataProperty].rarity ?? null;
	}
}
