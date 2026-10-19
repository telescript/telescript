import { APIRichBlockTableCell } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';

export class RichBlockTableCell extends Structure<APIRichBlockTableCell> {
	public get text() {
		const data = this[Structure.DataProperty].text;
		return data !== undefined ? createRichText(data, this[Structure.OwnerProperty]) : null;
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
		return this[Structure.DataProperty].align;
	}

	public get valign() {
		return this[Structure.DataProperty].valign;
	}
}
