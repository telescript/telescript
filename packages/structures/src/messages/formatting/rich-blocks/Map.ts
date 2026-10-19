import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class MapRichBlock extends BaseRichBlock<RichBlockType.Map> {
	public isMap(): this is Resolve<'MapRichBlock'> {
		return true;
	}

	public get location(): Resolve<'Location'> {
		return createStructure(this[Structure.OwnerProperty], 'Location', this[Structure.DataProperty].location);
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

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
