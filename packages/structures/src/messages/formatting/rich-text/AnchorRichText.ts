import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import type { Resolve } from '../../../registry.js';

export class AnchorRichText extends BaseRichText<RichTextType.Anchor> {
	public isAnchor(): this is Resolve<'AnchorRichText'> {
		return true;
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}
}
