import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';

export class DetailsRichBlock extends BaseRichBlock<RichBlockType.Details> {
	public isDetails(): this is DetailsRichBlock {
		return true;
	}

	public get summary() {
		return this[Structure.DataProperty].summary;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block));
	}

	public get isOpen() {
		return this[Structure.DataProperty].is_open ?? false;
	}
}
