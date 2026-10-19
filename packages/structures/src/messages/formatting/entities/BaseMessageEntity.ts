import { APIMessageEntity, MessageEntityType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import type { Resolve, StructureOwner } from '../../../registry.js';

export class BaseMessageEntity<
	Type extends MessageEntityType,
	Data extends APIMessageEntity.FromType<Type> = APIMessageEntity.FromType<Type>,
> extends Structure<Data> {
	public readonly text: string;

	public constructor(data: Data, owner: StructureOwner, text: string) {
		super(data, owner);
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

	public isMention(): this is Resolve<'MentionMessageEntity'> {
		return false;
	}

	public isHashtag(): this is Resolve<'HashtagMessageEntity'> {
		return false;
	}

	public isCashtag(): this is Resolve<'CashtagMessageEntity'> {
		return false;
	}

	public isBotCommand(): this is Resolve<'BotCommandMessageEntity'> {
		return false;
	}

	public isURL(): this is Resolve<'URLMessageEntity'> {
		return false;
	}

	public isEmail(): this is Resolve<'EmailMessageEntity'> {
		return false;
	}

	public isPhoneNumber(): this is Resolve<'PhoneNumberMessageEntity'> {
		return false;
	}

	public isBold(): this is Resolve<'BoldMessageEntity'> {
		return false;
	}

	public isItalic(): this is Resolve<'ItalicMessageEntity'> {
		return false;
	}

	public isUnderline(): this is Resolve<'UnderlineMessageEntity'> {
		return false;
	}

	public isStrikethrough(): this is Resolve<'StrikethroughMessageEntity'> {
		return false;
	}

	public isSpoiler(): this is Resolve<'SpoilerMessageEntity'> {
		return false;
	}

	public isBlockquote(): this is Resolve<'BlockquoteMessageEntity'> {
		return false;
	}

	public isExpandableBlockquote(): this is Resolve<'ExpandableBlockquoteMessageEntity'> {
		return false;
	}

	public isCode(): this is Resolve<'CodeMessageEntity'> {
		return false;
	}

	public isPre(): this is Resolve<'PreMessageEntity'> {
		return false;
	}

	public isTextLink(): this is Resolve<'TextLinkMessageEntity'> {
		return false;
	}

	public isTextMention(): this is Resolve<'TextMentionMessageEntity'> {
		return false;
	}

	public isCustomEmoji(): this is Resolve<'CustomEmojiMessageEntity'> {
		return false;
	}

	public isDateTime(): this is Resolve<'DateTimeMessageEntity'> {
		return false;
	}
}
