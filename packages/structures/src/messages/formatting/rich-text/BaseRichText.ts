import { APIRichText, RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import type { Resolve } from '../../../registry.js';

export class BaseRichText<
	Type extends RichTextType,
	Data extends APIRichText.FromType<Type> = APIRichText.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isBold(): this is Resolve<'BoldRichText'> {
		return false;
	}

	public isItalic(): this is Resolve<'ItalicRichText'> {
		return false;
	}

	public isUnderline(): this is Resolve<'UnderlineRichText'> {
		return false;
	}

	public isStrikethrough(): this is Resolve<'StrikethroughRichText'> {
		return false;
	}

	public isSpoiler(): this is Resolve<'SpoilerRichText'> {
		return false;
	}

	public isDateTime(): this is Resolve<'DateTimeRichText'> {
		return false;
	}

	public isTextMention(): this is Resolve<'TextMentionRichText'> {
		return false;
	}

	public isSubscript(): this is Resolve<'SubscriptRichText'> {
		return false;
	}

	public isSuperscript(): this is Resolve<'SuperscriptRichText'> {
		return false;
	}

	public isMarked(): this is Resolve<'MarkedRichText'> {
		return false;
	}

	public isCode(): this is Resolve<'CodeRichText'> {
		return false;
	}

	public isCustomEmoji(): this is Resolve<'CustomEmojiRichText'> {
		return false;
	}

	public isMathematicalExpression(): this is Resolve<'MathematicalExpressionRichText'> {
		return false;
	}

	public isUrl(): this is Resolve<'UrlRichText'> {
		return false;
	}

	public isEmailAddress(): this is Resolve<'EmailAddressRichText'> {
		return false;
	}

	public isPhoneNumber(): this is Resolve<'PhoneNumberRichText'> {
		return false;
	}

	public isBankCardNumber(): this is Resolve<'BankCardNumberRichText'> {
		return false;
	}

	public isMention(): this is Resolve<'MentionRichText'> {
		return false;
	}

	public isHashtag(): this is Resolve<'HashtagRichText'> {
		return false;
	}

	public isCashtag(): this is Resolve<'CashtagRichText'> {
		return false;
	}

	public isBotCommand(): this is Resolve<'BotCommandRichText'> {
		return false;
	}

	public isButton(): this is Resolve<'ButtonRichText'> {
		return false;
	}

	public isAnchor(): this is Resolve<'AnchorRichText'> {
		return false;
	}

	public isAnchorLink(): this is Resolve<'AnchorLinkRichText'> {
		return false;
	}

	public isReference(): this is Resolve<'ReferenceRichText'> {
		return false;
	}

	public isReferenceLink(): this is Resolve<'ReferenceLinkRichText'> {
		return false;
	}
}
