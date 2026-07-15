import { APIVideoNote } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { SizedMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';
import { Structure } from '../Structure.js';

export interface VideoNote
	extends SizedMediaMixin<APIVideoNote>, TemporalMediaMixin<APIVideoNote>, ThumbnailedMediaMixin<APIVideoNote> {}

export class VideoNote extends BaseMedia<APIVideoNote> {
	static {
		this.mixin(SizedMediaMixin, TemporalMediaMixin, ThumbnailedMediaMixin);
	}

	public get length() {
		return this[Structure.DataProperty].length;
	}
}
