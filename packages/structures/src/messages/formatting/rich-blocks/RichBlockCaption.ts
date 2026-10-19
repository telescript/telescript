import { APIRichBlockCaption } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { createRichText } from '../rich-text/createRichText.js';

export class RichBlockCaption extends Structure<APIRichBlockCaption> {
	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get credit() {
		const data = this[Structure.DataProperty].credit;
		return data ? createRichText(data, this[Structure.OwnerProperty]) : null;
	}
}
