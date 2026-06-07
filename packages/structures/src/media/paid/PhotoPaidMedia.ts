import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';
import { PhotoSize } from '../PhotoSize.js';

export class PhotoPaidMedia extends BasePaidMedia<PaidMediaType.Photo> {
	public isPhoto(): this is PhotoPaidMedia {
		return true;
	}

	public get photo() {
		return this[Structure.DataProperty].photo.map((data) => new PhotoSize(data));
	}
}
