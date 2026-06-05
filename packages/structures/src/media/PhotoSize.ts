import { APIPhotoSize } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { SizedMediaMixin, SpatialMediaMixin } from './mixins/index.js';

export interface PhotoSize extends SizedMediaMixin<APIPhotoSize>, SpatialMediaMixin<APIPhotoSize> {}

export class PhotoSize extends BaseMedia<APIPhotoSize> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin);
	}
}
