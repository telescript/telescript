import { APIUniqueGiftModel } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Sticker } from '../../media/sticker/Sticker.js';

export class UniqueGiftModel extends Structure<APIUniqueGiftModel> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get sticker() {
		return new Sticker(this[Structure.DataProperty].sticker);
	}

	public get rarityPerMille() {
		return this[Structure.DataProperty].rarity_per_mille;
	}

	public get rarity() {
		return this[Structure.DataProperty].rarity ?? null;
	}
}
