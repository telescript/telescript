import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class CollageRichBlock extends BaseRichBlock<RichBlockType.Collage> {
	public isCollage(): this is Resolve<'CollageRichBlock'> {
		return true;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block, this[Structure.OwnerProperty]));
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
