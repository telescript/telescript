import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';

export class BlockQuotationRichBlock extends BaseRichBlock<RichBlockType.BlockQuotation> {
	public isBlockQuotation(): this is BlockQuotationRichBlock {
		return true;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block));
	}

	public get credit() {
		return this[Structure.DataProperty].credit ?? null;
	}
}
