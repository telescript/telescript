import { RichBlockType } from '@telescript/api-types';
import { BaseRichBlock } from './BaseRichBlock.js';

export class DividerRichBlock extends BaseRichBlock<RichBlockType.Divider> {
	public isDivider(): this is DividerRichBlock {
		return true;
	}
}
