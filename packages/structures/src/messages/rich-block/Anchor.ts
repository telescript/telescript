import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class AnchorRichBlock extends BaseRichBlock<RichBlockType.Anchor> {
	public isAnchor(): this is AnchorRichBlock {
		return true;
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}
}
