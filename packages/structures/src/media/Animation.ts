import { APIAnimation } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { DescribedMediaMixin, SpatialMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';

export interface Animation
	extends
		SpatialMediaMixin<APIAnimation>,
		TemporalMediaMixin<APIAnimation>,
		ThumbnailedMediaMixin<APIAnimation>,
		DescribedMediaMixin<APIAnimation> {}

export class Animation extends BaseMedia<APIAnimation> {
	static {
		this.mixin(SpatialMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}
}
