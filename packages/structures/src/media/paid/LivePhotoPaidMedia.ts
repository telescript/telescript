import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class LivePhotoPaidMedia extends BasePaidMedia<PaidMediaType.LivePhoto> {
	public isLivePhoto(): this is Resolve<'LivePhotoPaidMedia'> {
		return true;
	}

	public get livePhoto(): Resolve<'LivePhoto'> {
		return createStructure(this[Structure.OwnerProperty], 'LivePhoto', this[Structure.DataProperty].live_photo);
	}
}
