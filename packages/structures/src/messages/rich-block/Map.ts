import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { Location } from '../Location.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class MapRichBlock extends BaseRichBlock<RichBlockType.Map> {
	public isMap(): this is MapRichBlock {
		return true;
	}

	public get location() {
		return new Location(this[Structure.DataProperty].location);
	}

	public get zoom() {
		return this[Structure.DataProperty].zoom;
	}

	public get width() {
		return this[Structure.DataProperty].width;
	}

	public get height() {
		return this[Structure.DataProperty].height;
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
