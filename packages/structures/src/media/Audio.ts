import { APIAudio } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Structure } from '../Structure.js';
import { DescribedMediaMixin, SizedMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';

export interface Audio
	extends
		SizedMediaMixin<APIAudio>,
		TemporalMediaMixin<APIAudio>,
		ThumbnailedMediaMixin<APIAudio>,
		DescribedMediaMixin<APIAudio> {}

export class Audio extends BaseMedia<APIAudio> {
	static {
		this.mixin(SizedMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}

	public get performer() {
		return this[Structure.DataProperty].performer ?? null;
	}

	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}
}
