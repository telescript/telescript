import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import type { Resolve } from '../../../registry.js';

export class ParagraphRichBlock extends BaseRichBlock<RichBlockType.Paragraph> {
	public isParagraph(): this is Resolve<'ParagraphRichBlock'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}
}
