import { createStructure, type Resolve } from '../../registry.js';
import { APIStickerSet } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class StickerSet extends Structure<APIStickerSet> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get stickerType() {
		return this[Structure.DataProperty].sticker_type;
	}

	public get stickers(): Resolve<'Sticker'>[] {
		return this[Structure.DataProperty].stickers.map((sticker) =>
			createStructure(this[Structure.OwnerProperty], 'Sticker', sticker),
		);
	}

	public get thumbnail(): Resolve<'PhotoSize'> | null {
		const data = this[Structure.DataProperty].thumbnail;
		return data ? createStructure(this[Structure.OwnerProperty], 'PhotoSize', data) : null;
	}
}
