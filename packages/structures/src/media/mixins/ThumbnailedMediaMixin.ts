import { MediaBase, ThumbnailedMediaBase } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Structure } from '../../Structure.js';

export class ThumbnailedMediaMixin<Data extends MediaBase & ThumbnailedMediaBase> extends BaseMedia<Data> {
	public get thumbnail() {
		return this[Structure.DataProperty].thumbnail ?? null;
	}
}
