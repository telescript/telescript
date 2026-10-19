import { createStructure, type Resolve } from '../registry.js';
import { APIUniqueGiftBackdrop } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class UniqueGiftBackdrop extends Structure<APIUniqueGiftBackdrop> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get colors(): Resolve<'UniqueGiftBackdropColors'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'UniqueGiftBackdropColors',
			this[Structure.DataProperty].colors,
		);
	}

	public get rarityPerMille() {
		return this[Structure.DataProperty].rarity_per_mille;
	}
}
