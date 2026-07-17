import { APIRichMessage } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createRichBlock } from './rich-block/index.js';

export class RichMessage extends Structure<APIRichMessage> {
	public get blocks() {
		return this[Structure.DataProperty].blocks.map((block) => createRichBlock(block));
	}

	public get isRTL() {
		return this[Structure.DataProperty].is_rtl ?? false;
	}
}
