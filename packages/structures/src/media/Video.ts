import { createStructure, type Resolve } from '../registry.js';
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

	public get cover(): Resolve<'PhotoSize'>[] | null {
		const data = this[Structure.DataProperty].cover;
		return data ? data.map((data) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', data)) : null;
	}

	public get startTimestamp() {
		return this[Structure.DataProperty].start_timestamp ?? null;
	}

	public get qualities(): Resolve<'VideoQuality'>[] | null {
		const data = this[Structure.DataProperty].qualities;
		return data ? data.map((data) => createStructure(this[Structure.OwnerProperty], 'VideoQuality', data)) : null;
	}
}
