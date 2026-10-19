import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';
import type { Resolve } from '../../../registry.js';

export class BlockQuotationRichBlock extends BaseRichBlock<RichBlockType.BlockQuotation> {
	public isBlockQuotation(): this is Resolve<'BlockQuotationRichBlock'> {
		return true;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block, this[Structure.OwnerProperty]));
	}

	public get credit() {
		const data = this[Structure.DataProperty].credit;
		return data ? createRichText(data, this[Structure.OwnerProperty]) : null;
	}
}
