import { APILivePhoto } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Structure } from '../Structure.js';
import { MIMETypedMediaMixin, SizedMediaMixin, SpatialMediaMixin, TemporalMediaMixin } from './mixins/index.js';
import { createStructure, type Resolve } from '../registry.js';

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

	public get photo(): Resolve<'PhotoSize'>[] | null {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((data) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', data)) : null;
	}
}
