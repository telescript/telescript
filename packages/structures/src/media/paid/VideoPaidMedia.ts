import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';
import { Video } from '../Video.js';

export class VideoPaidMedia extends BasePaidMedia<PaidMediaType.Video> {
	public isVideo(): this is VideoPaidMedia {
		return true;
	}

	public get video() {
		return new Video(this[Structure.DataProperty].video);
	}
}
