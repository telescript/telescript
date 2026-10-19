import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class CashtagRichText extends BaseRichText<RichTextType.Cashtag> {
	public isCashtag(): this is Resolve<'CashtagRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get cashtag() {
		return this[Structure.DataProperty].cashtag;
	}
}
