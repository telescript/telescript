import { APIRichMessage } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class RichMessage extends Structure<APIRichMessage> {
	public get blocks() {
		return this[Structure.DataProperty].blocks;
	}

	public get isRTL() {
		return this[Structure.DataProperty].is_rtl ?? false;
	}
}
