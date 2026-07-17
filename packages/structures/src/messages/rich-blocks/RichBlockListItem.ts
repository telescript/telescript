import { APIRichBlockListItem } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createRichBlock } from './index.js';

export class RichBlockListItem extends Structure<APIRichBlockListItem> {
	public get label() {
		return this[Structure.DataProperty].label;
	}

	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block));
	}

	public get hasCheckbox() {
		return this[Structure.DataProperty].has_checkbox ?? false;
	}

	public get isChecked() {
		return this[Structure.DataProperty].is_checked ?? false;
	}

	public get value() {
		return this[Structure.DataProperty].value ?? null;
	}

	public get type() {
		return this[Structure.DataProperty].type ?? null;
	}
}
