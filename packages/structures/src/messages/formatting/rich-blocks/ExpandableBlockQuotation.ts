import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import type { Resolve } from '../../../registry.js';

export class ExpandableBlockQuotationRichBlock extends BaseRichBlock<RichBlockType.ExpandableBlockQuotation> {
	public isExpandableBlockQuotation(): this is Resolve<'ExpandableBlockQuotationRichBlock'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get credit() {
		const data = this[Structure.DataProperty].credit;
		return data ? createRichText(data, this[Structure.OwnerProperty]) : null;
	}
}
