import { APIVideoQuality } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { SizedMediaMixin, SpatialMediaMixin } from './mixins/index.js';
import { Structure } from '../Structure.js';

export interface VideoQuality extends SizedMediaMixin<APIVideoQuality>, SpatialMediaMixin<APIVideoQuality> {}

export class VideoQuality extends BaseMedia<APIVideoQuality> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin);
	}

	public get codec() {
		return this[Structure.DataProperty].codec;
	}
}
