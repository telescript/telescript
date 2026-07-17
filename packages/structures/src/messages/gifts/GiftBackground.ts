import { APIGiftBackground } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class GiftBackground extends Structure<APIGiftBackground> {
	public get centerColor() {
		return this[Structure.DataProperty].center_color;
	}

	public get edgeColor() {
		return this[Structure.DataProperty].edge_color;
	}

	public get textColor() {
		return this[Structure.DataProperty].text_color;
	}
}
