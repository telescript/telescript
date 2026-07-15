import { APIMessageEntity, MessageEntityType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { MentionMessageEntity } from './Mention.js';
import { HashtagMessageEntity } from './Hashtag.js';
import { CashtagMessageEntity } from './Cashtag.js';
import { BotCommandMessageEntity } from './BotCommand.js';
import { URLMessageEntity } from './URL.js';
import { EmailMessageEntity } from './Email.js';
import { PhoneNumberMessageEntity } from './PhoneNumber.js';
import { BoldMessageEntity } from './Bold.js';
import { ItalicMessageEntity } from './Italic.js';
import { UnderlineMessageEntity } from './Underline.js';
import { StrikethroughMessageEntity } from './Strikethrough.js';
import { SpoilerMessageEntity } from './Spoiler.js';
import { BlockquoteMessageEntity } from './Blockquote.js';
import { ExpandableBlockquoteMessageEntity } from './ExpandableBlockquote.js';
import { CodeMessageEntity } from './Code.js';
import { PreMessageEntity } from './Pre.js';
import { TextLinkMessageEntity } from './TextLink.js';
import { TextMentionMessageEntity } from './TextMention.js';
import { CustomEmojiMessageEntity } from './CustomEmoji.js';
import { DateTimeMessageEntity } from './DateTime.js';

export class BaseMessageEntity<
	Type extends MessageEntityType,
	Data extends APIMessageEntity.FromType<Type> = APIMessageEntity.FromType<Type>,
> extends Structure<Data> {
	public readonly text: string;

	public constructor(data: Data, text: string) {
		super(data);
		this.text = text.slice(data.offset, data.offset + data.length);
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get offset() {
		return this[Structure.DataProperty].offset;
	}

	public get length() {
		return this[Structure.DataProperty].length;
	}

	public isMention(): this is MentionMessageEntity {
		return false;
	}

	public isHashtag(): this is HashtagMessageEntity {
		return false;
	}

	public isCashtag(): this is CashtagMessageEntity {
		return false;
	}

	public isBotCommand(): this is BotCommandMessageEntity {
		return false;
	}

	public isURL(): this is URLMessageEntity {
		return false;
	}

	public isEmail(): this is EmailMessageEntity {
		return false;
	}

	public isPhoneNumber(): this is PhoneNumberMessageEntity {
		return false;
	}

	public isBold(): this is BoldMessageEntity {
		return false;
	}

	public isItalic(): this is ItalicMessageEntity {
		return false;
	}

	public isUnderline(): this is UnderlineMessageEntity {
		return false;
	}

	public isStrikethrough(): this is StrikethroughMessageEntity {
		return false;
	}

	public isSpoiler(): this is SpoilerMessageEntity {
		return false;
	}

	public isBlockquote(): this is BlockquoteMessageEntity {
		return false;
	}

	public isExpandableBlockquote(): this is ExpandableBlockquoteMessageEntity {
		return false;
	}

	public isCode(): this is CodeMessageEntity {
		return false;
	}

	public isPre(): this is PreMessageEntity {
		return false;
	}

	public isTextLink(): this is TextLinkMessageEntity {
		return false;
	}

	public isTextMention(): this is TextMentionMessageEntity {
		return false;
	}

	public isCustomEmoji(): this is CustomEmojiMessageEntity {
		return false;
	}

	public isDateTime(): this is DateTimeMessageEntity {
		return false;
	}
}
