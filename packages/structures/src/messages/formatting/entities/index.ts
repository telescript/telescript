import { APIMessageEntity, MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { BlockquoteMessageEntity } from './Blockquote.js';
import { BoldMessageEntity } from './Bold.js';
import { BotCommandMessageEntity } from './BotCommand.js';
import { CashtagMessageEntity } from './Cashtag.js';
import { CodeMessageEntity } from './Code.js';
import { CustomEmojiMessageEntity } from './CustomEmoji.js';
import { DateTimeMessageEntity } from './DateTime.js';
import { EmailMessageEntity } from './Email.js';
import { ExpandableBlockquoteMessageEntity } from './ExpandableBlockquote.js';
import { HashtagMessageEntity } from './Hashtag.js';
import { ItalicMessageEntity } from './Italic.js';
import { MentionMessageEntity } from './Mention.js';
import { PhoneNumberMessageEntity } from './PhoneNumber.js';
import { PreMessageEntity } from './Pre.js';
import { SpoilerMessageEntity } from './Spoiler.js';
import { StrikethroughMessageEntity } from './Strikethrough.js';
import { TextLinkMessageEntity } from './TextLink.js';
import { TextMentionMessageEntity } from './TextMention.js';
import { UnderlineMessageEntity } from './Underline.js';
import { URLMessageEntity } from './URL.js';
import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../../registry.js';

export * from './BaseMessageEntity.js';
export * from './Blockquote.js';
export * from './Bold.js';
export * from './BotCommand.js';
export * from './Cashtag.js';
export * from './Code.js';
export * from './CustomEmoji.js';
export * from './DateTime.js';
export * from './Email.js';
export * from './ExpandableBlockquote.js';
export * from './Hashtag.js';
export * from './Italic.js';
export * from './Mention.js';
export * from './PhoneNumber.js';
export * from './Pre.js';
export * from './Spoiler.js';
export * from './Strikethrough.js';
export * from './TextLink.js';
export * from './TextMention.js';
export * from './Underline.js';
export * from './URL.js';

export type MessageEntity =
	| Resolve<'BaseMessageEntity'>
	| Resolve<'BlockquoteMessageEntity'>
	| Resolve<'BoldMessageEntity'>
	| Resolve<'BotCommandMessageEntity'>
	| Resolve<'CashtagMessageEntity'>
	| Resolve<'CodeMessageEntity'>
	| Resolve<'CustomEmojiMessageEntity'>
	| Resolve<'DateTimeMessageEntity'>
	| Resolve<'EmailMessageEntity'>
	| Resolve<'ExpandableBlockquoteMessageEntity'>
	| Resolve<'HashtagMessageEntity'>
	| Resolve<'ItalicMessageEntity'>
	| Resolve<'MentionMessageEntity'>
	| Resolve<'PhoneNumberMessageEntity'>
	| Resolve<'PreMessageEntity'>
	| Resolve<'SpoilerMessageEntity'>
	| Resolve<'StrikethroughMessageEntity'>
	| Resolve<'TextLinkMessageEntity'>
	| Resolve<'TextMentionMessageEntity'>
	| Resolve<'UnderlineMessageEntity'>
	| Resolve<'URLMessageEntity'>;

export function createMessageEntity(
	data: APIMessageEntity,
	text: string,
	owner: StructureOwner = defaultOwner,
): MessageEntity {
	switch (data.type) {
		case MessageEntityType.Blockquote:
			return createStructure(owner, 'BlockquoteMessageEntity', data, text);
		case MessageEntityType.Bold:
			return createStructure(owner, 'BoldMessageEntity', data, text);
		case MessageEntityType.BotCommand:
			return createStructure(owner, 'BotCommandMessageEntity', data, text);
		case MessageEntityType.Cashtag:
			return createStructure(owner, 'CashtagMessageEntity', data, text);
		case MessageEntityType.Code:
			return createStructure(owner, 'CodeMessageEntity', data, text);
		case MessageEntityType.CustomEmoji:
			return createStructure(owner, 'CustomEmojiMessageEntity', data, text);
		case MessageEntityType.DateTime:
			return createStructure(owner, 'DateTimeMessageEntity', data, text);
		case MessageEntityType.Email:
			return createStructure(owner, 'EmailMessageEntity', data, text);
		case MessageEntityType.ExpandableBlockquote:
			return createStructure(owner, 'ExpandableBlockquoteMessageEntity', data, text);
		case MessageEntityType.Hashtag:
			return createStructure(owner, 'HashtagMessageEntity', data, text);
		case MessageEntityType.Italic:
			return createStructure(owner, 'ItalicMessageEntity', data, text);
		case MessageEntityType.Mention:
			return createStructure(owner, 'MentionMessageEntity', data, text);
		case MessageEntityType.PhoneNumber:
			return createStructure(owner, 'PhoneNumberMessageEntity', data, text);
		case MessageEntityType.Pre:
			return createStructure(owner, 'PreMessageEntity', data, text);
		case MessageEntityType.Spoiler:
			return createStructure(owner, 'SpoilerMessageEntity', data, text);
		case MessageEntityType.Strikethrough:
			return createStructure(owner, 'StrikethroughMessageEntity', data, text);
		case MessageEntityType.TextLink:
			return createStructure(owner, 'TextLinkMessageEntity', data, text);
		case MessageEntityType.TextMention:
			return createStructure(owner, 'TextMentionMessageEntity', data, text);
		case MessageEntityType.Underline:
			return createStructure(owner, 'UnderlineMessageEntity', data, text);
		case MessageEntityType.URL:
			return createStructure(owner, 'URLMessageEntity', data, text);
		default:
			return createStructure(owner, 'BaseMessageEntity', data, text);
	}
}

declare module '../../../registry.js' {
	interface DefaultTypes {
		BaseMessageEntity: BaseMessageEntity<never>;
		BlockquoteMessageEntity: BlockquoteMessageEntity;
		BoldMessageEntity: BoldMessageEntity;
		BotCommandMessageEntity: BotCommandMessageEntity;
		CashtagMessageEntity: CashtagMessageEntity;
		CodeMessageEntity: CodeMessageEntity;
		CustomEmojiMessageEntity: CustomEmojiMessageEntity;
		DateTimeMessageEntity: DateTimeMessageEntity;
		EmailMessageEntity: EmailMessageEntity;
		ExpandableBlockquoteMessageEntity: ExpandableBlockquoteMessageEntity;
		HashtagMessageEntity: HashtagMessageEntity;
		ItalicMessageEntity: ItalicMessageEntity;
		MentionMessageEntity: MentionMessageEntity;
		PhoneNumberMessageEntity: PhoneNumberMessageEntity;
		PreMessageEntity: PreMessageEntity;
		SpoilerMessageEntity: SpoilerMessageEntity;
		StrikethroughMessageEntity: StrikethroughMessageEntity;
		TextLinkMessageEntity: TextLinkMessageEntity;
		TextMentionMessageEntity: TextMentionMessageEntity;
		URLMessageEntity: URLMessageEntity;
		UnderlineMessageEntity: UnderlineMessageEntity;
	}
}

registerStructures({
	BaseMessageEntity,
	BlockquoteMessageEntity,
	BoldMessageEntity,
	BotCommandMessageEntity,
	CashtagMessageEntity,
	CodeMessageEntity,
	CustomEmojiMessageEntity,
	DateTimeMessageEntity,
	EmailMessageEntity,
	ExpandableBlockquoteMessageEntity,
	HashtagMessageEntity,
	ItalicMessageEntity,
	MentionMessageEntity,
	PhoneNumberMessageEntity,
	PreMessageEntity,
	SpoilerMessageEntity,
	StrikethroughMessageEntity,
	TextLinkMessageEntity,
	TextMentionMessageEntity,
	URLMessageEntity,
	UnderlineMessageEntity,
});
