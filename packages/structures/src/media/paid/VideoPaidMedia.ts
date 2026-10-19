import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class VideoPaidMedia extends BasePaidMedia<PaidMediaType.Video> {
	public isVideo(): this is Resolve<'VideoPaidMedia'> {
		return true;
	}

	public get video(): Resolve<'Video'> {
		return createStructure(this[Structure.OwnerProperty], 'Video', this[Structure.DataProperty].video);
	}
}
