import { APIAnimation } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Animation as ParentAnimation } from '@telescript/structures';

export interface Animation extends ParentAnimation {}

export class Animation extends BaseMedia<APIAnimation> {
	static {
		this.mixin(ParentAnimation);
	}
}
