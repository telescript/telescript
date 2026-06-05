import { APIVideo } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia';
import {
	DescribedMediaMixin,
	SizedMediaMixin,
	SpatialMediaMixin,
	TemporalMediaMixin,
	ThumbnailedMediaMixin,
} from './mixins';
import { Structure } from '../Structure';
import { PhotoSize } from './PhotoSize';
import { VideoQuality } from './VideoQuality';

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
