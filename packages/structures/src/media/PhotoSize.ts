import { APIPhotoSize } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { SpatialMediaMixin } from './mixins/index.js';

export interface PhotoSize extends SpatialMediaMixin<APIPhotoSize> {}

export class PhotoSize extends BaseMedia<APIPhotoSize> {
	static {
		this.mixin(SpatialMediaMixin);
	}
}
