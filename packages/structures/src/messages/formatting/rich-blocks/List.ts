import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class ListRichBlock extends BaseRichBlock<RichBlockType.List> {
	public isList(): this is Resolve<'ListRichBlock'> {
		return true;
	}

	public get items(): Resolve<'RichBlockListItem'>[] {
		return this[Structure.DataProperty].items.map((item) =>
			createStructure(this[Structure.OwnerProperty], 'RichBlockListItem', item),
		);
	}
}
