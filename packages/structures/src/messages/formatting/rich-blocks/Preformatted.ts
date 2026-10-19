import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import type { Resolve } from '../../../registry.js';

export class PreformattedRichBlock extends BaseRichBlock<RichBlockType.Preformatted> {
	public isPreformatted(): this is Resolve<'PreformattedRichBlock'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get language() {
		return this[Structure.DataProperty].language ?? null;
	}
}
