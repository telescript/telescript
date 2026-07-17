import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class FooterRichBlock extends BaseRichBlock<RichBlockType.Footer> {
	public isFooter(): this is FooterRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}
}
