import { APIVideoQuality } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { VideoQuality as ParentVideoQuality } from '@telescript/structures';

export interface VideoQuality extends ParentVideoQuality {}

export class VideoQuality extends BaseMedia<APIVideoQuality> {
	static {
		this.mixin(ParentVideoQuality);
	}
}
