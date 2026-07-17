import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { RichBlockTableCell } from './RichBlockTableCell.js';

export class TableRichBlock extends BaseRichBlock<RichBlockType.Table> {
	public isTable(): this is TableRichBlock {
		return true;
	}

	public get cells() {
		return this[Structure.DataProperty].cells.map((row) => row.map((cell) => new RichBlockTableCell(cell)));
	}

	public get isBordered() {
		return this[Structure.DataProperty].is_bordered ?? false;
	}

	public get isStriped() {
		return this[Structure.DataProperty].is_striped ?? false;
	}

	public get caption() {
		return this[Structure.DataProperty].caption ?? null;
	}
}
