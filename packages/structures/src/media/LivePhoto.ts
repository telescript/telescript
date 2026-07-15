import { APILivePhoto } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Structure } from '../Structure.js';
import { PhotoSize } from './PhotoSize.js';
import { MIMETypedMediaMixin, SizedMediaMixin, SpatialMediaMixin, TemporalMediaMixin } from './mixins/index.js';

export interface LivePhoto
	extends
		SizedMediaMixin<APILivePhoto>,
		SpatialMediaMixin<APILivePhoto>,
		TemporalMediaMixin<APILivePhoto>,
		MIMETypedMediaMixin<APILivePhoto> {}

export class LivePhoto extends BaseMedia<APILivePhoto> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin, TemporalMediaMixin, MIMETypedMediaMixin);
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((data) => new PhotoSize(data)) : null;
	}
}
