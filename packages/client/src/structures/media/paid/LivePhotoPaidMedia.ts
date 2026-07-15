import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { LivePhotoPaidMedia as ParentLivePhotoPaidMedia, Structure } from '@telescript/structures';
import { LivePhoto } from '../LivePhoto.js';

export interface LivePhotoPaidMedia extends ParentLivePhotoPaidMedia {}

export class LivePhotoPaidMedia extends BasePaidMedia<PaidMediaType.LivePhoto> {
	static {
		this.mixin(ParentLivePhotoPaidMedia);
	}

	public get livePhoto() {
		return new LivePhoto(this.client, this[Structure.DataProperty].live_photo);
	}
}
