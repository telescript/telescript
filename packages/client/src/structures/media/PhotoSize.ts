import { APIPhotoSize } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { PhotoSize as ParentPhotoSize } from '@telescript/structures';

export interface PhotoSize extends ParentPhotoSize {}

export class PhotoSize extends BaseMedia<APIPhotoSize> {
	static {
		this.mixin(ParentPhotoSize);
	}
}
