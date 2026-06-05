import { APILivePhoto } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Structure } from '../Structure.js';
import { PhotoSize } from './PhotoSize.js';
import { MIMETypedMediaMixin, SpatialMediaMixin, TemporalMediaMixin } from './mixins/index.js';

export interface LivePhote
	extends SpatialMediaMixin<APILivePhoto>, TemporalMediaMixin<APILivePhoto>, MIMETypedMediaMixin<APILivePhoto> {}

export class LivePhoto extends BaseMedia<APILivePhoto> {
	static {
		this.mixin(SpatialMediaMixin, TemporalMediaMixin, MIMETypedMediaMixin);
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((data) => new PhotoSize(data)) : null;
	}
}
