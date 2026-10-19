import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class TextMentionRichText extends BaseRichText<RichTextType.TextMention> {
	public isTextMention(): this is Resolve<'TextMentionRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}
}
