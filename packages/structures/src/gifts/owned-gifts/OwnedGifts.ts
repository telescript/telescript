import { createStructure, type Resolve } from '../../registry.js';
import { APIOwnedGifts, OwnedGiftType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class OwnedGifts extends Structure<APIOwnedGifts> {
	public get totalCount() {
		return this[Structure.DataProperty].total_count;
	}

	public get gifts(): (Resolve<'RegularOwnedGift'> | Resolve<'UniqueOwnedGift'> | Resolve<'BaseOwnedGift'>)[] {
		return this[Structure.DataProperty].gifts.map((gift) => {
			switch (gift.type) {
				case OwnedGiftType.Regular:
					return createStructure(this[Structure.OwnerProperty], 'RegularOwnedGift', gift);
				case OwnedGiftType.Unique:
					return createStructure(this[Structure.OwnerProperty], 'UniqueOwnedGift', gift);
				default:
					return createStructure(this[Structure.OwnerProperty], 'BaseOwnedGift', gift);
			}
		});
	}

	public get nextOffset() {
		return this[Structure.DataProperty].next_offset ?? null;
	}
}
