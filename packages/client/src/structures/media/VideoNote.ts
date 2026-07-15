import { APIVideoNote } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { VideoNote as ParentVideoNote } from '@telescript/structures';

export interface VideoNote extends ParentVideoNote {}

export class VideoNote extends BaseMedia<APIVideoNote> {
	static {
		this.mixin(ParentVideoNote);
	}
}
