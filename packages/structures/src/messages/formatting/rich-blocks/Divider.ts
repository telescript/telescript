import { RichBlockType } from '@telescript/api-types';
import { BaseRichBlock } from './BaseRichBlock.js';
import type { Resolve } from '../../../registry.js';

export class DividerRichBlock extends BaseRichBlock<RichBlockType.Divider> {
	public isDivider(): this is Resolve<'DividerRichBlock'> {
		return true;
	}
}
