import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createRichBlock } from './index.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class SlideshowRichBlock extends BaseRichBlock<RichBlockType.Slideshow> {
	public isSlideshow(): this is SlideshowRichBlock {
		return true;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block));
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
