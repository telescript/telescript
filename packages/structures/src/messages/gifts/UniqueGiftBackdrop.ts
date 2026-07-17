import { APIUniqueGiftBackdrop } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { UniqueGiftBackdropColors } from './UniqueGiftBackdropColors.js';

export class UniqueGiftBackdrop extends Structure<APIUniqueGiftBackdrop> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get colors() {
		return new UniqueGiftBackdropColors(this[Structure.DataProperty].colors);
	}

	public get rarityPerMille() {
		return this[Structure.DataProperty].rarity_per_mille;
	}
}
