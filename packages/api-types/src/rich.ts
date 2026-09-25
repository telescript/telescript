import {
	APICopyTextButton,
	APIDisabledButton,
	APILoginURL,
	APISwitchInlineQueryChosenChat,
	APIWebAppInfo,
} from './keyboard.js';
import { APIAnimation, APIAudio, APIDocument, APIPhotoSize, APIVideo, APIVoice } from './media.js';
import { APILocation } from './message.js';
import { APIUser } from './user.js';

export interface APIRichMessage {
	blocks: APIRichBlock[];
	is_rtl?: boolean;
}

export enum RichMessageButtonStyle {
	Danger = 'danger',
	Success = 'success',
	Primary = 'primary',
	Link = 'link',
}

export interface APIRichMessageButton {
	text: APIRichText;
	style?: RichMessageButtonStyle;
	url?: string;
	callback_data?: string;
	web_app?: APIWebAppInfo;
	login_url?: APILoginURL;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	switch_inline_query_chosen_chat?: APISwitchInlineQueryChosenChat;
	copy_text?: APICopyTextButton;
	disabled?: APIDisabledButton;
}

export enum RichTextType {
	Bold = 'bold',
	Italic = 'italic',
	Underline = 'underline',
	Strikethrough = 'strikethrough',
	Spoiler = 'spoiler',
	DateTime = 'date_time',
	TextMention = 'text_mention',
	Subscript = 'subscript',
	Superscript = 'superscript',
	Marked = 'marked',
	Code = 'code',
	CustomEmoji = 'custom_emoji',
	MathematicalExpression = 'mathematical_expression',
	URL = 'url',
	EmailAddress = 'email_address',
	PhoneNumber = 'phone_number',
	BankCardNumber = 'bank_card_number',
	Mention = 'mention',
	Hashtag = 'hashtag',
	Cashtag = 'cashtag',
	BotCommand = 'bot_command',
	Button = 'button',
	Anchor = 'anchor',
	AnchorLink = 'anchor_link',
	Reference = 'reference',
	ReferenceLink = 'reference_link',
}

export type APIRichText =
	| APIRichText.Bold
	| APIRichText.Italic
	| APIRichText.Underline
	| APIRichText.Strikethrough
	| APIRichText.Spoiler
	| APIRichText.DateTime
	| APIRichText.TextMention
	| APIRichText.Subscript
	| APIRichText.Superscript
	| APIRichText.Marked
	| APIRichText.Code
	| APIRichText.CustomEmoji
	| APIRichText.MathematicalExpression
	| APIRichText.URL
	| APIRichText.EmailAddress
	| APIRichText.PhoneNumber
	| APIRichText.BankCardNumber
	| APIRichText.Mention
	| APIRichText.Hashtag
	| APIRichText.Cashtag
	| APIRichText.BotCommand
	| APIRichText.Button
	| APIRichText.Anchor
	| APIRichText.AnchorLink
	| APIRichText.Reference
	| APIRichText.ReferenceLink;

export namespace APIRichText {
	export interface Base<Type extends RichTextType> {
		type: Type;
	}

	export interface Bold extends Base<RichTextType.Bold> {
		text: APIRichText;
	}

	export interface Italic extends Base<RichTextType.Italic> {
		text: APIRichText;
	}

	export interface Underline extends Base<RichTextType.Underline> {
		text: APIRichText;
	}

	export interface Strikethrough extends Base<RichTextType.Strikethrough> {
		text: APIRichText;
	}

	export interface Spoiler extends Base<RichTextType.Spoiler> {
		text: APIRichText;
	}

	export interface DateTime extends Base<RichTextType.DateTime> {
		text: APIRichText;
		unix_time: number;
		date_time_format: string;
	}

	export interface TextMention extends Base<RichTextType.TextMention> {
		text: APIRichText;
		user: APIUser;
	}

	export interface Subscript extends Base<RichTextType.Subscript> {
		text: APIRichText;
	}

	export interface Superscript extends Base<RichTextType.Superscript> {
		text: APIRichText;
	}

	export interface Marked extends Base<RichTextType.Marked> {
		text: APIRichText;
	}

	export interface Code extends Base<RichTextType.Code> {
		text: APIRichText;
	}

	export interface CustomEmoji extends Base<RichTextType.CustomEmoji> {
		custom_emoji_id: string;
		alternative_text: string;
	}

	export interface MathematicalExpression extends Base<RichTextType.MathematicalExpression> {
		expression: string;
	}

	export interface URL extends Base<RichTextType.URL> {
		text: APIRichText;
		url: string;
	}

	export interface EmailAddress extends Base<RichTextType.EmailAddress> {
		text: APIRichText;
		email_address: string;
	}

	export interface PhoneNumber extends Base<RichTextType.PhoneNumber> {
		text: APIRichText;
		phone_number: string;
	}

	export interface BankCardNumber extends Base<RichTextType.BankCardNumber> {
		text: APIRichText;
		bank_card_number: string;
	}

	export interface Mention extends Base<RichTextType.Mention> {
		text: APIRichText;
		username: string;
	}

	export interface Hashtag extends Base<RichTextType.Hashtag> {
		text: APIRichText;
		hashtag: string;
	}

	export interface Cashtag extends Base<RichTextType.Cashtag> {
		text: APIRichText;
		cashtag: string;
	}

	export interface BotCommand extends Base<RichTextType.BotCommand> {
		text: APIRichText;
		bot_command: string;
	}

	export interface Button extends Base<RichTextType.Button> {
		button: APIRichMessageButton;
	}

	export interface Anchor extends Base<RichTextType.Anchor> {
		name: string;
	}

	export interface AnchorLink extends Base<RichTextType.AnchorLink> {
		text: APIRichText;
		anchor_name: string;
	}

	export interface Reference extends Base<RichTextType.Reference> {
		text: APIRichText;
		name: string;
	}

	export interface ReferenceLink extends Base<RichTextType.ReferenceLink> {
		text: APIRichText;
		reference_name: string;
	}

	export type FromType<Type extends RichTextType> = Extract<APIRichText, { type: Type }>;
}

export interface APIRichBlockCaption {
	text: APIRichText;
	credit?: APIRichText;
}

export enum RichBlockTableCellAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

export enum RichBlockTableCellValign {
	Top = 'top',
	Middle = 'middle',
	Bottom = 'bottom',
}

export interface APIRichBlockTableCell {
	text?: APIRichText;
	is_header?: true;
	colspan?: number;
	rowspan?: number;
	align: RichBlockTableCellAlign;
	valign: RichBlockTableCellValign;
}

export enum RichBlockListItemType {
	LowerLetter = 'a',
	UpperLetter = 'A',
	LowerRoman = 'i',
	UpperRoman = 'I',
	Decimal = '1',
}

export interface APIRichBlockListItem {
	label: string;
	blocks: APIRichBlock[];
	has_checkbox?: true;
	is_checked?: true;
	value?: number;
	type?: RichBlockListItemType;
}

export enum RichBlockType {
	Paragraph = 'paragraph',
	Heading = 'heading',
	Pre = 'pre',
	Footer = 'footer',
	Divider = 'divider',
	MathematicalExpression = 'mathematical_expression',
	Anchor = 'anchor',
	List = 'list',
	Blockquote = 'blockquote',
	ExpandableBlockquote = 'expandable_blockquote',
	Pullquote = 'pullquote',
	Collage = 'collage',
	Slideshow = 'slideshow',
	Table = 'table',
	Details = 'details',
	Map = 'map',
	Buttons = 'buttons',
	Animation = 'animation',
	Audio = 'audio',
	Document = 'document',
	Photo = 'photo',
	Video = 'video',
	VoiceNote = 'voice_note',
	Thinking = 'thinking',
}

export enum RichBlockButtonsAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

export type APIRichBlock =
	| APIRichBlock.Paragraph
	| APIRichBlock.SectionHeading
	| APIRichBlock.Preformatted
	| APIRichBlock.Footer
	| APIRichBlock.Divider
	| APIRichBlock.MathematicalExpression
	| APIRichBlock.Anchor
	| APIRichBlock.List
	| APIRichBlock.BlockQuotation
	| APIRichBlock.ExpandableBlockQuotation
	| APIRichBlock.PullQuotation
	| APIRichBlock.Collage
	| APIRichBlock.Slideshow
	| APIRichBlock.Table
	| APIRichBlock.Details
	| APIRichBlock.Map
	| APIRichBlock.Buttons
	| APIRichBlock.Animation
	| APIRichBlock.Audio
	| APIRichBlock.Document
	| APIRichBlock.Photo
	| APIRichBlock.Video
	| APIRichBlock.VoiceNote
	| APIRichBlock.Thinking;

export namespace APIRichBlock {
	export interface Base<Type extends RichBlockType> {
		type: Type;
	}

	export interface Paragraph extends Base<RichBlockType.Paragraph> {
		text: APIRichText;
	}

	export interface SectionHeading extends Base<RichBlockType.Heading> {
		text: APIRichText;
		size: number;
	}

	export interface Preformatted extends Base<RichBlockType.Pre> {
		text: APIRichText;
		language?: string;
	}

	export interface Footer extends Base<RichBlockType.Footer> {
		text: APIRichText;
	}

	export interface Divider extends Base<RichBlockType.Divider> {}

	export interface MathematicalExpression extends Base<RichBlockType.MathematicalExpression> {
		expression: string;
	}

	export interface Anchor extends Base<RichBlockType.Anchor> {
		name: string;
	}

	export interface List extends Base<RichBlockType.List> {
		items: APIRichBlockListItem[];
	}

	export interface BlockQuotation extends Base<RichBlockType.Blockquote> {
		blocks: APIRichBlock[];
		credit?: APIRichText;
	}

	export interface ExpandableBlockQuotation extends Base<RichBlockType.ExpandableBlockquote> {
		text: APIRichText;
		credit?: APIRichText;
	}

	export interface PullQuotation extends Base<RichBlockType.Pullquote> {
		text: APIRichText;
		credit?: APIRichText;
	}

	export interface Collage extends Base<RichBlockType.Collage> {
		blocks: APIRichBlock[];
		caption?: APIRichBlockCaption;
	}

	export interface Slideshow extends Base<RichBlockType.Slideshow> {
		blocks: APIRichBlock[];
		caption?: APIRichBlockCaption;
	}

	export interface Table extends Base<RichBlockType.Table> {
		cells: APIRichBlockTableCell[][];
		is_bordered?: true;
		is_striped?: true;
		is_compact?: true;
		caption?: APIRichText;
	}

	export interface Details extends Base<RichBlockType.Details> {
		summary: APIRichText;
		blocks: APIRichBlock[];
		is_open?: true;
	}

	export interface Map extends Base<RichBlockType.Map> {
		location: APILocation;
		zoom: number;
		width: number;
		height: number;
		caption?: APIRichBlockCaption;
	}

	export interface Buttons extends Base<RichBlockType.Buttons> {
		buttons: APIRichMessageButton[];
		align?: RichBlockButtonsAlign;
	}

	export interface Animation extends Base<RichBlockType.Animation> {
		animation: APIAnimation;
		has_spoiler?: true;
		caption?: APIRichBlockCaption;
	}

	export interface Audio extends Base<RichBlockType.Audio> {
		audio: APIAudio;
		caption?: APIRichBlockCaption;
	}

	export interface Document extends Base<RichBlockType.Document> {
		document: APIDocument;
		caption?: APIRichBlockCaption;
	}

	export interface Photo extends Base<RichBlockType.Photo> {
		photo: APIPhotoSize[];
		has_spoiler?: true;
		caption?: APIRichBlockCaption;
	}

	export interface Video extends Base<RichBlockType.Video> {
		video: APIVideo;
		has_spoiler?: true;
		caption?: APIRichBlockCaption;
	}

	export interface VoiceNote extends Base<RichBlockType.VoiceNote> {
		voice_note: APIVoice;
		caption?: APIRichBlockCaption;
	}

	export interface Thinking extends Base<RichBlockType.Thinking> {
		text: APIRichText;
	}

	export type FromType<Type extends RichBlockType> = Extract<APIRichBlock, { type: Type }>;
}
