import { APIUniqueGiftSymbol } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Sticker } from '../media/sticker/Sticker.js';

export class UniqueGiftSymbol extends Structure<APIUniqueGiftSymbol> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get sticker() {
		return new Sticker(this[Structure.DataProperty].sticker);
	}

	public get rarityPerMille() {
		return this[Structure.DataProperty].rarity_per_mille;
	}
}
