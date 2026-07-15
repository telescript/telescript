import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { VideoPaidMedia as ParentVideoPaidMedia, Structure } from '@telescript/structures';
import { Video } from '../Video.js';

export interface VideoPaidMedia extends ParentVideoPaidMedia {}

export class VideoPaidMedia extends BasePaidMedia<PaidMediaType.Video> {
	static {
		this.mixin(ParentVideoPaidMedia);
	}

	public get video() {
		return new Video(this.client, this[Structure.DataProperty].video);
	}
}
