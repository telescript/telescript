import { MediaBase, TemporalMediaBase } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Structure } from '../../Structure.js';

export class TemporalMediaMixin<Data extends MediaBase & TemporalMediaBase> extends BaseMedia<Data> {
	public get duration() {
		return this[Structure.DataProperty].duration;
	}
}
