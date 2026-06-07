import { MediaBase, SpatialMediaBase } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Structure } from '../../Structure.js';

export class SpatialMediaMixin<Data extends MediaBase & SpatialMediaBase> extends BaseMedia<Data> {
	public get width() {
		return this[Structure.DataProperty].width;
	}

	public get height() {
		return this[Structure.DataProperty].height;
	}
}
