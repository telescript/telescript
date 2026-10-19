import { registerStructures } from '../../../registry.js';
import { AnchorLinkRichText } from './AnchorLinkRichText.js';
import { AnchorRichText } from './AnchorRichText.js';
import { BankCardNumberRichText } from './BankCardNumberRichText.js';
import { BaseRichText } from './BaseRichText.js';
import { BoldRichText } from './BoldRichText.js';
import { BotCommandRichText } from './BotCommandRichText.js';
import { ButtonRichText } from './ButtonRichText.js';
import { CashtagRichText } from './CashtagRichText.js';
import { CodeRichText } from './CodeRichText.js';
import { CustomEmojiRichText } from './CustomEmojiRichText.js';
import { DateTimeRichText } from './DateTimeRichText.js';
import { EmailAddressRichText } from './EmailAddressRichText.js';
import { HashtagRichText } from './HashtagRichText.js';
import { ItalicRichText } from './ItalicRichText.js';
import { MarkedRichText } from './MarkedRichText.js';
import { MathematicalExpressionRichText } from './MathematicalExpressionRichText.js';
import { MentionRichText } from './MentionRichText.js';
import { PhoneNumberRichText } from './PhoneNumberRichText.js';
import { ReferenceLinkRichText } from './ReferenceLinkRichText.js';
import { ReferenceRichText } from './ReferenceRichText.js';
import { SpoilerRichText } from './SpoilerRichText.js';
import { StrikethroughRichText } from './StrikethroughRichText.js';
import { SubscriptRichText } from './SubscriptRichText.js';
import { SuperscriptRichText } from './SuperscriptRichText.js';
import { TextMentionRichText } from './TextMentionRichText.js';
import { UnderlineRichText } from './UnderlineRichText.js';
import { UrlRichText } from './UrlRichText.js';
export * from './BaseRichText.js';
export * from './BoldRichText.js';
export * from './ItalicRichText.js';
export * from './UnderlineRichText.js';
export * from './StrikethroughRichText.js';
export * from './SpoilerRichText.js';
export * from './DateTimeRichText.js';
export * from './TextMentionRichText.js';
export * from './SubscriptRichText.js';
export * from './SuperscriptRichText.js';
export * from './MarkedRichText.js';
export * from './CodeRichText.js';
export * from './CustomEmojiRichText.js';
export * from './MathematicalExpressionRichText.js';
export * from './UrlRichText.js';
export * from './EmailAddressRichText.js';
export * from './PhoneNumberRichText.js';
export * from './BankCardNumberRichText.js';
export * from './MentionRichText.js';
export * from './HashtagRichText.js';
export * from './CashtagRichText.js';
export * from './BotCommandRichText.js';
export * from './ButtonRichText.js';
export * from './AnchorRichText.js';
export * from './AnchorLinkRichText.js';
export * from './ReferenceRichText.js';
export * from './ReferenceLinkRichText.js';
export * from './createRichText.js';
export type { RichText, RichTextObject } from './types.js';

declare module '../../../registry.js' {
	interface DefaultTypes {
		AnchorLinkRichText: AnchorLinkRichText;
		AnchorRichText: AnchorRichText;
		BankCardNumberRichText: BankCardNumberRichText;
		BaseRichText: BaseRichText<never>;
		BoldRichText: BoldRichText;
		BotCommandRichText: BotCommandRichText;
		ButtonRichText: ButtonRichText;
		CashtagRichText: CashtagRichText;
		CodeRichText: CodeRichText;
		CustomEmojiRichText: CustomEmojiRichText;
		DateTimeRichText: DateTimeRichText;
		EmailAddressRichText: EmailAddressRichText;
		HashtagRichText: HashtagRichText;
		ItalicRichText: ItalicRichText;
		MarkedRichText: MarkedRichText;
		MathematicalExpressionRichText: MathematicalExpressionRichText;
		MentionRichText: MentionRichText;
		PhoneNumberRichText: PhoneNumberRichText;
		ReferenceLinkRichText: ReferenceLinkRichText;
		ReferenceRichText: ReferenceRichText;
		SpoilerRichText: SpoilerRichText;
		StrikethroughRichText: StrikethroughRichText;
		SubscriptRichText: SubscriptRichText;
		SuperscriptRichText: SuperscriptRichText;
		TextMentionRichText: TextMentionRichText;
		UnderlineRichText: UnderlineRichText;
		UrlRichText: UrlRichText;
	}
}

registerStructures({
	AnchorLinkRichText,
	AnchorRichText,
	BankCardNumberRichText,
	BaseRichText,
	BoldRichText,
	BotCommandRichText,
	ButtonRichText,
	CashtagRichText,
	CodeRichText,
	CustomEmojiRichText,
	DateTimeRichText,
	EmailAddressRichText,
	HashtagRichText,
	ItalicRichText,
	MarkedRichText,
	MathematicalExpressionRichText,
	MentionRichText,
	PhoneNumberRichText,
	ReferenceLinkRichText,
	ReferenceRichText,
	SpoilerRichText,
	StrikethroughRichText,
	SubscriptRichText,
	SuperscriptRichText,
	TextMentionRichText,
	UnderlineRichText,
	UrlRichText,
});
