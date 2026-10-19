import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class ReferenceLinkRichText extends BaseRichText<RichTextType.ReferenceLink> {
	public isReferenceLink(): this is Resolve<'ReferenceLinkRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get referenceName() {
		return this[Structure.DataProperty].reference_name;
	}
}
