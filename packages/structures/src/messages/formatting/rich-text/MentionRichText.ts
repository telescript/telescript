import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class MentionRichText extends BaseRichText<RichTextType.Mention> {
	public isMention(): this is Resolve<'MentionRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get username() {
		return this[Structure.DataProperty].username;
	}
}
