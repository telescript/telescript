import { APIVideo } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import {
	DescribedMediaMixin,
	SizedMediaMixin,
	SpatialMediaMixin,
	TemporalMediaMixin,
	ThumbnailedMediaMixin,
} from './mixins/index.js';
import { Structure } from '../Structure.js';
import { PhotoSize } from './PhotoSize.js';
import { VideoQuality } from './VideoQuality.js';

export interface Video
	extends
		SizedMediaMixin<APIVideo>,
		SpatialMediaMixin<APIVideo>,
		TemporalMediaMixin<APIVideo>,
		ThumbnailedMediaMixin<APIVideo>,
		DescribedMediaMixin<APIVideo> {}

export class Video extends BaseMedia<APIVideo> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}

	public get cover() {
		const data = this[Structure.DataProperty].cover;
		return data ? data.map((data) => new PhotoSize(data)) : null;
	}

	public get startTimestamp() {
		return this[Structure.DataProperty].start_timestamp ?? null;
	}

	public get qualities() {
		const data = this[Structure.DataProperty].qualities;
		return data ? data.map((data) => new VideoQuality(data)) : null;
	}
}
