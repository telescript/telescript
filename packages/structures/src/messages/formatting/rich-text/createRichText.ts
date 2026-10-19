import { APIRichText, RichTextType } from '@telescript/api-types';
import type { RichText } from './types.js';
import { createStructure, defaultOwner, type StructureOwner } from '../../../registry.js';

export function createRichText(data: APIRichText, owner: StructureOwner = defaultOwner): RichText {
	if (typeof data === 'string') {
		return data;
	}

	if (Array.isArray(data)) {
		return data.map((item) => createRichText(item, owner));
	}

	switch (data.type) {
		case RichTextType.Bold:
			return createStructure(owner, 'BoldRichText', data);
		case RichTextType.Italic:
			return createStructure(owner, 'ItalicRichText', data);
		case RichTextType.Underline:
			return createStructure(owner, 'UnderlineRichText', data);
		case RichTextType.Strikethrough:
			return createStructure(owner, 'StrikethroughRichText', data);
		case RichTextType.Spoiler:
			return createStructure(owner, 'SpoilerRichText', data);
		case RichTextType.DateTime:
			return createStructure(owner, 'DateTimeRichText', data);
		case RichTextType.TextMention:
			return createStructure(owner, 'TextMentionRichText', data);
		case RichTextType.Subscript:
			return createStructure(owner, 'SubscriptRichText', data);
		case RichTextType.Superscript:
			return createStructure(owner, 'SuperscriptRichText', data);
		case RichTextType.Marked:
			return createStructure(owner, 'MarkedRichText', data);
		case RichTextType.Code:
			return createStructure(owner, 'CodeRichText', data);
		case RichTextType.CustomEmoji:
			return createStructure(owner, 'CustomEmojiRichText', data);
		case RichTextType.MathematicalExpression:
			return createStructure(owner, 'MathematicalExpressionRichText', data);
		case RichTextType.Url:
			return createStructure(owner, 'UrlRichText', data);
		case RichTextType.EmailAddress:
			return createStructure(owner, 'EmailAddressRichText', data);
		case RichTextType.PhoneNumber:
			return createStructure(owner, 'PhoneNumberRichText', data);
		case RichTextType.BankCardNumber:
			return createStructure(owner, 'BankCardNumberRichText', data);
		case RichTextType.Mention:
			return createStructure(owner, 'MentionRichText', data);
		case RichTextType.Hashtag:
			return createStructure(owner, 'HashtagRichText', data);
		case RichTextType.Cashtag:
			return createStructure(owner, 'CashtagRichText', data);
		case RichTextType.BotCommand:
			return createStructure(owner, 'BotCommandRichText', data);
		case RichTextType.Button:
			return createStructure(owner, 'ButtonRichText', data);
		case RichTextType.Anchor:
			return createStructure(owner, 'AnchorRichText', data);
		case RichTextType.AnchorLink:
			return createStructure(owner, 'AnchorLinkRichText', data);
		case RichTextType.Reference:
			return createStructure(owner, 'ReferenceRichText', data);
		case RichTextType.ReferenceLink:
			return createStructure(owner, 'ReferenceLinkRichText', data);
		default:
			return createStructure(owner, 'BaseRichText', data);
	}
}
