import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { LivePhoto } from '../LivePhoto.js';
import { Structure } from '../../Structure.js';

export class LivePhotoPaidMedia extends BasePaidMedia<PaidMediaType.LivePhoto> {
	public isLivePhoto(): this is LivePhotoPaidMedia {
		return true;
	}

	public get livePhoto() {
		return new LivePhoto(this[Structure.DataProperty].live_photo);
	}
}
