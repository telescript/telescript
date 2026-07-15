import { APILivePhoto } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { LivePhoto as ParentLivePhoto, Structure } from '@telescript/structures';
import { PhotoSize } from './PhotoSize.js';

export interface LivePhoto extends ParentLivePhoto {}

export class LivePhoto extends BaseMedia<APILivePhoto> {
	static {
		this.mixin(ParentLivePhoto);
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((data) => new PhotoSize(this.client, data)) : null;
	}
}
