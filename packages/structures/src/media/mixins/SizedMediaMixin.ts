import { MediaBase } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Structure } from '../../Structure.js';

export class SizedMediaMixin<Data extends MediaBase> extends BaseMedia<Data> {
	public get fileSize() {
		return this[Structure.DataProperty].file_size ?? null;
	}
}
