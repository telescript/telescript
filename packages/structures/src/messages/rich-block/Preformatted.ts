import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class PreformattedRichBlock extends BaseRichBlock<RichBlockType.Preformatted> {
	public isPreformatted(): this is PreformattedRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get language() {
		return this[Structure.DataProperty].language ?? null;
	}
}
