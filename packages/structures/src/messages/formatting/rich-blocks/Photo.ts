import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class PhotoRichBlock extends BaseRichBlock<RichBlockType.Photo> {
	public isPhoto(): this is Resolve<'PhotoRichBlock'> {
		return true;
	}

	public get photo(): Resolve<'PhotoSize'>[] {
		return this[Structure.DataProperty].photo.map((item) =>
			createStructure(this[Structure.OwnerProperty], 'PhotoSize', item),
		);
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
