import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class ThinkingRichBlock extends BaseRichBlock<RichBlockType.Thinking> {
	public isThinking(): this is ThinkingRichBlock {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}
}
