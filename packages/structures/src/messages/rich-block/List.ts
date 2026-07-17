import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { RichBlockListItem } from './RichBlockListItem.js';

export class ListRichBlock extends BaseRichBlock<RichBlockType.List> {
	public isList(): this is ListRichBlock {
		return true;
	}

	public get items() {
		return this[Structure.DataProperty].items.map((item) => new RichBlockListItem(item));
	}
}
