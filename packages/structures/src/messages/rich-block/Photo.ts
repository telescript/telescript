import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { PhotoSize } from '../../media/PhotoSize.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class PhotoRichBlock extends BaseRichBlock<RichBlockType.Photo> {
	public isPhoto(): this is PhotoRichBlock {
		return true;
	}

	public get photo() {
		return this[Structure.DataProperty].photo.map((item) => new PhotoSize(item));
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
