import { APIVideoQuality } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia';
import { SizedMediaMixin, SpatialMediaMixin } from './mixins';
import { Structure } from '../Structure';

export interface VideoQuality extends SizedMediaMixin<APIVideoQuality>, SpatialMediaMixin<APIVideoQuality> {}

export class VideoQuality extends BaseMedia<APIVideoQuality> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin);
	}

	public get codec() {
		return this[Structure.DataProperty].codec;
	}
}
