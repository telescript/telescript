import { APIVoice } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { MIMETypedMediaMixin, SizedMediaMixin, TemporalMediaMixin } from './mixins/index.js';

export interface Voice extends SizedMediaMixin<APIVoice>, TemporalMediaMixin<APIVoice>, MIMETypedMediaMixin<APIVoice> {}

export class Voice extends BaseMedia<APIVoice> {
	static {
		this.mixin(SizedMediaMixin, TemporalMediaMixin, MIMETypedMediaMixin);
	}
}
