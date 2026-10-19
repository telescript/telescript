import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import type { Resolve } from '../../../registry.js';

export class SectionHeadingRichBlock extends BaseRichBlock<RichBlockType.SectionHeading> {
	public isSectionHeading(): this is Resolve<'SectionHeadingRichBlock'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get size() {
		return this[Structure.DataProperty].size;
	}
}
