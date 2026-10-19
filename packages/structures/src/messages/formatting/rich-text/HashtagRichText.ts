import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class HashtagRichText extends BaseRichText<RichTextType.Hashtag> {
	public isHashtag(): this is Resolve<'HashtagRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get hashtag() {
		return this[Structure.DataProperty].hashtag;
	}
}
