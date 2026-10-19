import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import type { Resolve } from '../../../registry.js';

export class CustomEmojiRichText extends BaseRichText<RichTextType.CustomEmoji> {
	public isCustomEmoji(): this is Resolve<'CustomEmojiRichText'> {
		return true;
	}

	public get customEmojiId() {
		return this[Structure.DataProperty].custom_emoji_id;
	}

	public get alternativeText() {
		return this[Structure.DataProperty].alternative_text;
	}
}
