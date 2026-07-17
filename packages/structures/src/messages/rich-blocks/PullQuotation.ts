import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class PullQuotationRichBlock extends BaseRichBlock<RichBlockType.PullQuotation> {
	public isPullQuotation(): this is PullQuotationRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get credit() {
		return this[Structure.DataProperty].credit ?? null;
	}
}
