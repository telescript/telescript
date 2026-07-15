import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { PhotoPaidMedia as ParentPhotoPaidMedia, Structure } from '@telescript/structures';
import { PhotoSize } from '../PhotoSize.js';

export interface PhotoPaidMedia extends ParentPhotoPaidMedia {}

export class PhotoPaidMedia extends BasePaidMedia<PaidMediaType.Photo> {
	static {
		this.mixin(ParentPhotoPaidMedia);
	}

	public get photo() {
		return this[Structure.DataProperty].photo.map((data) => new PhotoSize(this.client, data));
	}
}
