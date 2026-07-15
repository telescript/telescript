import { APIVoice } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Voice as ParentVoice } from '@telescript/structures';

export interface Voice extends ParentVoice {}

export class Voice extends BaseMedia<APIVoice> {
	static {
		this.mixin(ParentVoice);
	}
}
