import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class PhotoPaidMedia extends BasePaidMedia<PaidMediaType.Photo> {
	public isPhoto(): this is Resolve<'PhotoPaidMedia'> {
		return true;
	}

	public get photo(): Resolve<'PhotoSize'>[] {
		return this[Structure.DataProperty].photo.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'PhotoSize', data),
		);
	}
}
