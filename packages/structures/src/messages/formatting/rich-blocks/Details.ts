import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';
import type { Resolve } from '../../../registry.js';

export class DetailsRichBlock extends BaseRichBlock<RichBlockType.Details> {
	public isDetails(): this is Resolve<'DetailsRichBlock'> {
		return true;
	}

	public get summary() {
		return createRichText(this[Structure.DataProperty].summary, this[Structure.OwnerProperty]);
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block, this[Structure.OwnerProperty]));
	}

	public get isOpen() {
		return this[Structure.DataProperty].is_open ?? false;
	}
}
