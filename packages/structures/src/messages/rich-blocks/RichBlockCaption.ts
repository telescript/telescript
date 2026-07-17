import { APIRichBlockCaption } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class RichBlockCaption extends Structure<APIRichBlockCaption> {
	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get credit() {
		return this[Structure.DataProperty].credit ?? null;
	}
}
