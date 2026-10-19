import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class ReferenceRichText extends BaseRichText<RichTextType.Reference> {
	public isReference(): this is Resolve<'ReferenceRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}
}
