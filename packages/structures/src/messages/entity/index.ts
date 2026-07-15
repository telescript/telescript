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
import { ExpandableBlockquoteMessageEntity } from './ExpandableBlockquote';
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
	| BaseMessageEntity<never>
	| BlockquoteMessageEntity
	| BoldMessageEntity
	| BotCommandMessageEntity
	| CashtagMessageEntity
	| CodeMessageEntity
	| CustomEmojiMessageEntity
	| DateTimeMessageEntity
	| EmailMessageEntity
	| ExpandableBlockquoteMessageEntity
	| HashtagMessageEntity
	| ItalicMessageEntity
	| MentionMessageEntity
	| PhoneNumberMessageEntity
	| PreMessageEntity
	| SpoilerMessageEntity
	| StrikethroughMessageEntity
	| TextLinkMessageEntity
	| TextMentionMessageEntity
	| UnderlineMessageEntity
	| URLMessageEntity;

export function createMessageEntity(data: APIMessageEntity, text: string): MessageEntity {
	switch (data.type) {
		case MessageEntityType.Blockquote:
			return new BlockquoteMessageEntity(data, text);
		case MessageEntityType.Bold:
			return new BoldMessageEntity(data, text);
		case MessageEntityType.BotCommand:
			return new BotCommandMessageEntity(data, text);
		case MessageEntityType.Cashtag:
			return new CashtagMessageEntity(data, text);
		case MessageEntityType.Code:
			return new CodeMessageEntity(data, text);
		case MessageEntityType.CustomEmoji:
			return new CustomEmojiMessageEntity(data, text);
		case MessageEntityType.DateTime:
			return new DateTimeMessageEntity(data, text);
		case MessageEntityType.Email:
			return new EmailMessageEntity(data, text);
		case MessageEntityType.ExpandableBlockquote:
			return new ExpandableBlockquoteMessageEntity(data, text);
		case MessageEntityType.Hashtag:
			return new HashtagMessageEntity(data, text);
		case MessageEntityType.Italic:
			return new ItalicMessageEntity(data, text);
		case MessageEntityType.Mention:
			return new MentionMessageEntity(data, text);
		case MessageEntityType.PhoneNumber:
			return new PhoneNumberMessageEntity(data, text);
		case MessageEntityType.Pre:
			return new PreMessageEntity(data, text);
		case MessageEntityType.Spoiler:
			return new SpoilerMessageEntity(data, text);
		case MessageEntityType.Strikethrough:
			return new StrikethroughMessageEntity(data, text);
		case MessageEntityType.TextLink:
			return new TextLinkMessageEntity(data, text);
		case MessageEntityType.TextMention:
			return new TextMentionMessageEntity(data, text);
		case MessageEntityType.Underline:
			return new UnderlineMessageEntity(data, text);
		case MessageEntityType.URL:
			return new URLMessageEntity(data, text);
		default:
			return new BaseMessageEntity<never>(data, text);
	}
}
