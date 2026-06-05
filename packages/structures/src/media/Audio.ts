import { APIAudio } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Structure } from '../Structure.js';
import { DescribedMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';

export interface Audio
	extends TemporalMediaMixin<APIAudio>, ThumbnailedMediaMixin<APIAudio>, DescribedMediaMixin<APIAudio> {}

export class Audio extends BaseMedia<APIAudio> {
	static {
		this.mixin(TemporalMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}

	public get performer() {
		return this[Structure.DataProperty].performer ?? null;
	}

	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}
}
