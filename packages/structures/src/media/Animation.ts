import { APIAnimation } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import {
	DescribedMediaMixin,
	SizedMediaMixin,
	SpatialMediaMixin,
	TemporalMediaMixin,
	ThumbnailedMediaMixin,
} from './mixins/index.js';

export interface Animation
	extends
		SizedMediaMixin<APIAnimation>,
		SpatialMediaMixin<APIAnimation>,
		TemporalMediaMixin<APIAnimation>,
		ThumbnailedMediaMixin<APIAnimation>,
		DescribedMediaMixin<APIAnimation> {}

export class Animation extends BaseMedia<APIAnimation> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}
}
