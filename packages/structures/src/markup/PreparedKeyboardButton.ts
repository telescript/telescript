import { APIPreparedKeyboardButton } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class PreparedKeyboardButton extends Structure<APIPreparedKeyboardButton> {
	public get id() {
		return this[Structure.DataProperty].id;
	}
}
