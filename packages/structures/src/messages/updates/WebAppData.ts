import { APIWebAppData } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class WebAppData extends Structure<APIWebAppData> {
	public get data() {
		return this[Structure.DataProperty].data;
	}

	public get buttonText() {
		return this[Structure.DataProperty].button_text;
	}
}
