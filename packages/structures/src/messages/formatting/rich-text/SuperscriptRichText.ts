import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class SuperscriptRichText extends BaseRichText<RichTextType.Superscript> {
	public isSuperscript(): this is Resolve<'SuperscriptRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}
}
