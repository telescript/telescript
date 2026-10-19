import { APICopyTextButton } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class CopyTextButton extends Structure<APICopyTextButton> {
	public get text() {
		return this[Structure.DataProperty].text;
	}
}
