import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class SectionHeadingRichBlock extends BaseRichBlock<RichBlockType.SectionHeading> {
	public isSectionHeading(): this is SectionHeadingRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get size() {
		return this[Structure.DataProperty].size;
	}
}
