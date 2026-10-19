import type { Resolve } from '../../../registry.js';

export type RichTextObject =
	| Resolve<'BaseRichText'>
	| Resolve<'BoldRichText'>
	| Resolve<'ItalicRichText'>
	| Resolve<'UnderlineRichText'>
	| Resolve<'StrikethroughRichText'>
	| Resolve<'SpoilerRichText'>
	| Resolve<'DateTimeRichText'>
	| Resolve<'TextMentionRichText'>
	| Resolve<'SubscriptRichText'>
	| Resolve<'SuperscriptRichText'>
	| Resolve<'MarkedRichText'>
	| Resolve<'CodeRichText'>
	| Resolve<'CustomEmojiRichText'>
	| Resolve<'MathematicalExpressionRichText'>
	| Resolve<'UrlRichText'>
	| Resolve<'EmailAddressRichText'>
	| Resolve<'PhoneNumberRichText'>
	| Resolve<'BankCardNumberRichText'>
	| Resolve<'MentionRichText'>
	| Resolve<'HashtagRichText'>
	| Resolve<'CashtagRichText'>
	| Resolve<'BotCommandRichText'>
	| Resolve<'ButtonRichText'>
	| Resolve<'AnchorRichText'>
	| Resolve<'AnchorLinkRichText'>
	| Resolve<'ReferenceRichText'>
	| Resolve<'ReferenceLinkRichText'>;

export type RichText = string | RichText[] | RichTextObject;
