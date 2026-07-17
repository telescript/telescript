import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class ParagraphRichBlock extends BaseRichBlock<RichBlockType.Paragraph> {
	public isParagraph(): this is ParagraphRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}
}
