import { APIAudio } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Audio as ParentAudio } from '@telescript/structures';

export interface Audio extends ParentAudio {}

export class Audio extends BaseMedia<APIAudio> {
	static {
		this.mixin(ParentAudio);
	}
}
