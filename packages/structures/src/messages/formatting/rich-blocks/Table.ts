import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class TableRichBlock extends BaseRichBlock<RichBlockType.Table> {
	public isTable(): this is Resolve<'TableRichBlock'> {
		return true;
	}

	public get cells(): Resolve<'RichBlockTableCell'>[][] {
		return this[Structure.DataProperty].cells.map((row) =>
			row.map((cell) => createStructure(this[Structure.OwnerProperty], 'RichBlockTableCell', cell)),
		);
	}

	public get isBordered() {
		return this[Structure.DataProperty].is_bordered ?? false;
	}

	public get isStriped() {
		return this[Structure.DataProperty].is_striped ?? false;
	}

	public get isCompact() {
		return this[Structure.DataProperty].is_compact ?? false;
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data !== undefined ? createRichText(data, this[Structure.OwnerProperty]) : null;
	}
}
