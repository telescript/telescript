import { APIRichBlockTableCell } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class RichBlockTableCell extends Structure<APIRichBlockTableCell> {
	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get isHeader() {
		return this[Structure.DataProperty].is_header ?? false;
	}

	public get colspan() {
		return this[Structure.DataProperty].colspan ?? null;
	}

	public get rowspan() {
		return this[Structure.DataProperty].rowspan ?? null;
	}

	public get align() {
		return this[Structure.DataProperty].align ?? null;
	}

	public get valign() {
		return this[Structure.DataProperty].valign ?? null;
	}
}
