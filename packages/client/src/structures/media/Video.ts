import { APIVideo } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Video as ParentVideo, Structure } from '@telescript/structures';
import { PhotoSize } from './PhotoSize.js';
import { VideoQuality } from './VideoQuality.js';

export interface Video extends ParentVideo {}

export class Video extends BaseMedia<APIVideo> {
	static {
		this.mixin(ParentVideo);
	}

	public get cover() {
		const data = this[Structure.DataProperty].cover;
		return data ? data.map((data) => new PhotoSize(this.client, data)) : null;
	}

	public get qualities() {
		const data = this[Structure.DataProperty].qualities;
		return data ? data.map((data) => new VideoQuality(this.client, data)) : null;
	}
}
