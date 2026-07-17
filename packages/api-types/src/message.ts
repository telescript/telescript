import { APIChat } from './chat.js';
import { APIGame } from './games.js';
import { APILocation } from './location.js';
import { APIInlineKeyboardMarkup } from './markup.js';
import {
	APIAnimation,
	APIAudio,
	APIDocument,
	APILivePhoto,
	APIPaidMediaInfo,
	APIPhotoSize,
	APISticker,
	APIVideo,
	APIVideoNote,
	APIVoice,
} from './media.js';
import { APIPassportData } from './passport.js';
import { APIInvoice, APIRefundedPayment, APISuccessfulPayment } from './payments.js';
import { APIUser } from './user.js';

export interface APICommunity {
	id: number;
	name: string;
}

export interface APICommunityChatAdded {
	community: APICommunity;
}

export interface APICommunityChatRemoved {}

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
	Url = 'url',
	EmailAddress = 'email_address',
	PhoneNumber = 'phone_number',
	BankCardNumber = 'bank_card_number',
	Mention = 'mention',
	Hashtag = 'hashtag',
	Cashtag = 'cashtag',
	BotCommand = 'bot_command',
	Anchor = 'anchor',
	AnchorLink = 'anchor_link',
	Reference = 'reference',
	ReferenceLink = 'reference_link',
}

export type APIRichText = string | APIRichText[] | APIRichText.Object;

export namespace APIRichText {
	export interface Base<Type extends RichTextType> {
		type: Type;
	}

	export type Object =
		| Bold
		| Italic
		| Underline
		| Strikethrough
		| Spoiler
		| DateTime
		| TextMention
		| Subscript
		| Superscript
		| Marked
		| Code
		| CustomEmoji
		| MathematicalExpression
		| Url
		| EmailAddress
		| PhoneNumber
		| BankCardNumber
		| Mention
		| Hashtag
		| Cashtag
		| BotCommand
		| Anchor
		| AnchorLink
		| Reference
		| ReferenceLink;

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

	export interface Url extends Base<RichTextType.Url> {
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

	export type FromType<Type extends RichTextType> = Extract<Object, { type: Type }>;
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
	is_header?: boolean;
	colspan?: number;
	rowspan?: number;
	align?: RichBlockTableCellAlign;
	valign?: RichBlockTableCellValign;
}

export enum RichBlockListItemType {
	LowercaseLetters = 'a',
	UppercaseLetters = 'A',
	LowercaseRomanNumerals = 'i',
	UppercaseRomanNumerals = 'I',
	DecimalNumbers = '1',
}

export interface APIRichBlockListItem {
	label: string;
	blocks: APIRichBlock[];
	has_checkbox?: boolean;
	is_checked?: boolean;
	value?: number;
	type?: RichBlockListItemType;
}

export enum RichBlockType {
	Paragraph = 'paragraph',
	SectionHeading = 'heading',
	Preformatted = 'pre',
	Footer = 'footer',
	Divider = 'divider',
	MathematicalExpression = 'mathematical_expression',
	Anchor = 'anchor',
	List = 'list',
	BlockQuotation = 'blockquote',
	PullQuotation = 'pullquote',
	Collage = 'collage',
	Slideshow = 'slideshow',
	Table = 'table',
	Details = 'details',
	Map = 'map',
	Animation = 'animation',
	Audio = 'audio',
	Photo = 'photo',
	Video = 'video',
	VoiceNote = 'voice_note',
	Thinking = 'thinking',
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
	| APIRichBlock.PullQuotation
	| APIRichBlock.Collage
	| APIRichBlock.Slideshow
	| APIRichBlock.Table
	| APIRichBlock.Details
	| APIRichBlock.Map
	| APIRichBlock.Animation
	| APIRichBlock.Audio
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

	export interface SectionHeading extends Base<RichBlockType.SectionHeading> {
		text: APIRichText;
		size: number;
	}

	export interface Preformatted extends Base<RichBlockType.Preformatted> {
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

	export interface BlockQuotation extends Base<RichBlockType.BlockQuotation> {
		blocks: APIRichBlock[];
		credit?: APIRichText;
	}

	export interface PullQuotation extends Base<RichBlockType.PullQuotation> {
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
		is_bordered?: boolean;
		is_striped?: boolean;
		caption?: APIRichText;
	}

	export interface Details extends Base<RichBlockType.Details> {
		summary: APIRichText;
		blocks: APIRichBlock[];
		is_open?: boolean;
	}

	export interface Map extends Base<RichBlockType.Map> {
		location: APILocation;
		zoom: number;
		width: number;
		height: number;
		caption?: APIRichBlockCaption;
	}

	export interface Animation extends Base<RichBlockType.Animation> {
		animation: APIAnimation;
		has_spoiler?: boolean;
		caption?: APIRichBlockCaption;
	}

	export interface Audio extends Base<RichBlockType.Audio> {
		audio: APIAudio;
		caption?: APIRichBlockCaption;
	}

	export interface Photo extends Base<RichBlockType.Photo> {
		photo: APIPhotoSize[];
		has_spoiler?: boolean;
		caption?: APIRichBlockCaption;
	}

	export interface Video extends Base<RichBlockType.Video> {
		video: APIVideo;
		has_spoiler?: boolean;
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

export interface APIRichMessage {
	blocks: APIRichBlock[];
	is_rtl?: boolean;
}

export interface APIMessageId {
	message_id: number;
}

export type RepliedToMessageFrom<Message extends APIMessageId> = Omit<Message, 'reply_to_message'>;

export interface APIMessage extends APIMessageId {
	message_thread_id?: number;
	direct_messages_topic?: APIDirectMessagesTopic;
	from?: APIUser;
	sender_chat?: APIChat;
	sender_boost_count?: number;
	sender_business_bot?: APIUser;
	sender_tag?: string;
	receiver_user?: APIUser;
	ephemeral_message_id?: number;
	date: number;
	guest_query_id?: string;
	business_connection_id?: string;
	chat: APIChat;
	forward_origin?: APIMessageOrigin;
	is_topic_message?: boolean;
	is_automatic_forward?: boolean;
	reply_to_message?: RepliedToMessageFrom<APIMessage>;
	external_reply?: APIExternalReplyInfo;
	quote?: APITextQuote;
	reply_to_story?: APIStory;
	reply_to_checklist_task_id?: number;
	reply_to_poll_option_id?: string;
	via_bot?: APIUser;
	guest_bot_caller_user?: APIUser;
	guest_bot_caller_chat?: APIChat;
	edit_date?: number;
	has_protected_content?: boolean;
	is_from_offline?: boolean;
	is_paid_post?: boolean;
	media_group_id?: string;
	author_signature?: string;
	paid_star_count?: number;
	text?: string;
	entities?: APIMessageEntity[];
	link_preview_options?: APILinkPreviewOptions;
	suggested_post_info?: APISuggestedPostInfo;
	effect_id?: string;
	rich_message?: APIRichMessage;
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	live_photo?: APILivePhoto;
	paid_media?: APIPaidMediaInfo;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	story?: APIStory;
	video?: APIVideo;
	video_note?: APIVideoNote;
	voice?: APIVoice;
	caption?: string;
	caption_entities?: APIMessageEntity[];
	show_caption_above_media?: boolean;
	has_media_spoiler?: boolean;
	checklist?: APIChecklist;
	contact?: APIContact;
	dice?: APIDice;
	game?: APIGame;
	poll?: APIPoll;
	venue?: APIVenue;
	location?: APILocation;
	new_chat_members?: APIUser[];
	left_chat_member?: APIUser;
	chat_owner_left?: APIChatOwnerLeft;
	chat_owner_changed?: APIChatOwnerChanged;
	new_chat_title?: string;
	new_chat_photo?: APIPhotoSize[];
	delete_chat_photo?: boolean;
	group_chat_created?: boolean;
	supergroup_chat_created?: boolean;
	channel_chat_created?: boolean;
	message_auto_delete_timer_changed?: APIMessageAutoDeleteTimerChanged;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: APIMaybeInaccessibleMessage;
	invoice?: APIInvoice;
	successful_payment?: APISuccessfulPayment;
	refunded_payment?: APIRefundedPayment;
	users_shared?: APIUsersShared;
	chat_shared?: APIChatShared;
	gift?: APIGiftInfo;
	unique_gift?: APIUniqueGiftInfo;
	gift_upgrade_sent?: APIGiftInfo;
	connected_website?: string;
	write_access_allowed?: APIWriteAccessAllowed;
	passport_data?: APIPassportData;
	proximity_alert_triggered?: APIProximityAlertTriggered;
	boost_added?: APIChatBoostAdded;
	chat_background_set?: APIChatBackground;
	checklist_tasks_done?: APIChecklistTasksDone;
	checklist_tasks_added?: APIChecklistTasksAdded;
	community_chat_added?: APICommunityChatAdded;
	community_chat_removed?: APICommunityChatRemoved;
	direct_message_price_changed?: APIDirectMessagePriceChanged;
	forum_topic_created?: APIForumTopicCreated;
	forum_topic_edited?: APIForumTopicEdited;
	forum_topic_closed?: APIForumTopicClosed;
	forum_topic_reopened?: APIForumTopicReopened;
	general_forum_topic_hidden?: APIGeneralForumTopicHidden;
	general_forum_topic_unhidden?: APIGeneralForumTopicUnhidden;
	giveaway_created?: APIGiveawayCreated;
	giveaway?: APIGiveaway;
	giveaway_winners?: APIGiveawayWinners;
	giveaway_completed?: APIGiveawayCompleted;
	managed_bot_created?: APIManagedBotCreated;
	paid_message_price_changed?: APIPaidMessagePriceChanged;
	poll_option_added?: APIPollOptionAdded;
	poll_option_deleted?: APIPollOptionDeleted;
	suggested_post_approved?: APISuggestedPostApproved;
	suggested_post_approval_failed?: APISuggestedPostApprovalFailed;
	suggested_post_declined?: APISuggestedPostDeclined;
	suggested_post_paid?: APISuggestedPostPaid;
	suggested_post_refunded?: APISuggestedPostRefunded;
	video_chat_scheduled?: APIVideoChatScheduled;
	video_chat_started?: APIVideoChatStarted;
	video_chat_ended?: APIVideoChatEnded;
	video_chat_participants_invited?: APIVideoChatParticipantsInvited;
	web_app_data?: APIWebAppData;
	reply_markup?: APIInlineKeyboardMarkup;
}

export interface APIDirectMessagesTopic {
	topic_id: number;
	user?: APIUser;
}

export enum MessageOriginType {
	User = 'user',
	HiddenUser = 'hidden_user',
	Chat = 'chat',
	Channel = 'channel',
}

export type APIMessageOrigin =
	| APIMessageOrigin.User
	| APIMessageOrigin.HiddenUser
	| APIMessageOrigin.Chat
	| APIMessageOrigin.Channel;

export namespace APIMessageOrigin {
	export interface Base<Type extends MessageOriginType> {
		type: Type;
		date: number;
	}

	export interface User extends Base<MessageOriginType.User> {
		sender_user: APIUser;
	}

	export interface HiddenUser extends Base<MessageOriginType.HiddenUser> {
		sender_user_name: string;
	}

	export interface Chat extends Base<MessageOriginType.Chat> {
		sender_chat: APIChat;
		author_signature?: string;
	}

	export interface Channel extends Base<MessageOriginType.Channel> {
		chat: APIChat;
		message_id: number;
		author_signature?: string;
	}

	export type FromType<Type extends MessageOriginType> = Extract<APIMessageOrigin, { type: Type }>;
}

export interface APIExternalReplyInfo {
	origin: APIMessageOrigin;
	chat?: APIChat;
	message_id?: number;
	link_preview_options?: APILinkPreviewOptions;
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	live_photo?: APILivePhoto;
	paid_media?: APIPaidMediaInfo;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	story?: APIStory;
	video?: APIVideo;
	video_note?: APIVideoNote;
	voice?: APIVoice;
	has_media_spoiler?: boolean;
	checklist?: APIChecklist;
	contact?: APIContact;
	dice?: APIDice;
	game?: APIGame;
	giveaway?: APIGiveaway;
	giveaway_winners?: APIGiveawayWinners;
	invoice?: APIInvoice;
	location?: APILocation;
	poll?: APIPoll;
	venue?: APIVenue;
}

export interface APITextQuote {
	text: string;
	entities?: APIMessageEntity[];
	position: number;
	is_manual?: boolean;
}

export interface APIStory {
	chat: APIChat;
	id: number;
}

export enum MessageEntityType {
	Mention = 'mention',
	Hashtag = 'hashtag',
	Cashtag = 'cashtag',
	BotCommand = 'bot_command',
	URL = 'url',
	Email = 'email',
	PhoneNumber = 'phone_number',
	Bold = 'bold',
	Italic = 'italic',
	Underline = 'underline',
	Strikethrough = 'strikethrough',
	Spoiler = 'spoiler',
	Blockquote = 'blockquote',
	ExpandableBlockquote = 'expandable_blockquote',
	Code = 'code',
	Pre = 'pre',
	TextLink = 'text_link',
	TextMention = 'text_mention',
	CustomEmoji = 'custom_emoji',
	DateTime = 'date_time',
}

export type APIMessageEntity =
	| APIMessageEntity.Mention
	| APIMessageEntity.Hashtag
	| APIMessageEntity.Cashtag
	| APIMessageEntity.BotCommand
	| APIMessageEntity.URL
	| APIMessageEntity.Email
	| APIMessageEntity.PhoneNumber
	| APIMessageEntity.Bold
	| APIMessageEntity.Italic
	| APIMessageEntity.Underline
	| APIMessageEntity.Strikethrough
	| APIMessageEntity.Spoiler
	| APIMessageEntity.Blockquote
	| APIMessageEntity.ExpandableBlockquote
	| APIMessageEntity.Code
	| APIMessageEntity.Pre
	| APIMessageEntity.TextLink
	| APIMessageEntity.TextMention
	| APIMessageEntity.CustomEmoji
	| APIMessageEntity.DateTime;

export namespace APIMessageEntity {
	export interface Base<Type extends MessageEntityType> {
		type: Type;
		offset: number;
		length: number;
	}

	export interface Mention extends Base<MessageEntityType.Mention> {}

	export interface Hashtag extends Base<MessageEntityType.Hashtag> {}

	export interface Cashtag extends Base<MessageEntityType.Cashtag> {}

	export interface BotCommand extends Base<MessageEntityType.BotCommand> {}

	export interface URL extends Base<MessageEntityType.URL> {}

	export interface Email extends Base<MessageEntityType.Email> {}

	export interface PhoneNumber extends Base<MessageEntityType.PhoneNumber> {}

	export interface Bold extends Base<MessageEntityType.Bold> {}

	export interface Italic extends Base<MessageEntityType.Italic> {}

	export interface Underline extends Base<MessageEntityType.Underline> {}

	export interface Strikethrough extends Base<MessageEntityType.Strikethrough> {}

	export interface Spoiler extends Base<MessageEntityType.Spoiler> {}

	export interface Blockquote extends Base<MessageEntityType.Blockquote> {}

	export interface ExpandableBlockquote extends Base<MessageEntityType.ExpandableBlockquote> {}

	export interface Code extends Base<MessageEntityType.Code> {}

	export interface Pre extends Base<MessageEntityType.Pre> {
		language?: string;
	}

	export interface TextLink extends Base<MessageEntityType.TextLink> {
		url: string;
	}

	export interface TextMention extends Base<MessageEntityType.TextMention> {
		user: APIUser;
	}

	export interface CustomEmoji extends Base<MessageEntityType.CustomEmoji> {
		custom_emoji_id: string;
	}

	export interface DateTime extends Base<MessageEntityType.DateTime> {
		unix_time: number;
		date_time_format?: string;
	}

	export type FromType<Type extends MessageEntityType> = Extract<APIMessageEntity, { type: Type }>;
}

export interface APILinkPreviewOptions {
	is_disabled?: boolean;
	url?: string;
	prefer_small_media?: boolean;
	prefer_large_media?: boolean;
	show_above_text?: boolean;
}

export enum SuggestedPostInfoState {
	Pending = 'pending',
	Approved = 'approved',
	Declined = 'declined',
}

export interface APISuggestedPostPrice {
	currency: string;
	amount: number;
}

export interface APISuggestedPostInfo {
	state: SuggestedPostInfoState;
	price?: APISuggestedPostPrice;
	send_date?: number;
}

export interface APIChecklistTask {
	id: number;
	text: string;
	text_entities?: APIMessageEntity[];
	completed_by_user?: APIUser;
	completed_by_chat?: APIChat;
	completion_date?: number;
}

export interface APIChecklist {
	title: string;
	title_entities?: APIMessageEntity[];
	tasks: APIChecklistTask[];
	others_can_add_tasks?: boolean;
	others_can_mark_tasks_as_done?: boolean;
}

export interface APIContact {
	phone_number: string;
	first_name: string;
	last_name?: string;
	user_id?: number;
	vcard?: string;
}

export enum DiceEmoji {
	GameDie = '🎲',
	Dart = '🎯',
	Bowling = '🎳',
	Basketball = '🏀',
	Soccer = '⚽',
	SlotMachine = '🎰',
}

export interface APIDice {
	emoji: DiceEmoji;
	value: number;
}

export enum PollType {
	Regular = 'regular',
	Quiz = 'quiz',
}

export interface APIPollOption {
	persistent_id: string;
	text: string;
	text_entities?: APIMessageEntity[];
	media?: APIPollMedia;
	voter_count: number;
	added_by_user?: APIUser;
	added_by_chat?: APIChat;
	addition_date?: number;
}

export interface APILink {
	url: string;
}

export interface APIPollMedia {
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	link?: APILink;
	live_photo?: APILivePhoto;
	location?: APILocation;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	venue?: APIVenue;
	video?: APIVideo;
}

export interface APIPoll {
	id: string;
	question: string;
	question_entities?: APIMessageEntity[];
	options: APIPollOption[];
	total_voter_count: number;
	is_closed: boolean;
	is_anonymous: boolean;
	type: PollType;
	allows_multiple_answers: boolean;
	allows_revoting: boolean;
	members_only: boolean;
	country_codes?: string[];
	correct_option_ids?: number[];
	explanation?: string;
	explanation_entities?: APIMessageEntity[];
	explanation_media?: APIPollMedia;
	open_period?: number;
	close_date?: number;
	description?: string;
	description_entities?: APIMessageEntity[];
	media?: APIPollMedia;
}

export interface APIVenue {
	location: APILocation;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface APIChatOwnerLeft {
	new_owner?: APIUser;
}

export interface APIChatOwnerChanged {
	new_owner: APIUser;
}

export interface APIMessageAutoDeleteTimerChanged {
	message_auto_delete_time: number;
}

export interface APISharedUser {
	user_id: number;
	first_name?: string;
	last_name?: string;
	username?: string;
	photo?: APIPhotoSize[];
}

export interface APIUsersShared {
	request_id: number;
	users: APISharedUser[];
}

export interface APIChatShared {
	request_id: number;
	chat_id: number;
	title?: string;
	username?: string;
	photo?: APIPhotoSize[];
}

export interface APIGiftBackground {
	center_color: number;
	edge_color: number;
	text_color: number;
}

export interface APIGift {
	id: string;
	sticker: APISticker;
	star_count: number;
	upgrade_star_count?: number;
	is_premium?: boolean;
	has_colors?: boolean;
	total_count?: number;
	remaining_count?: number;
	personal_total_count?: number;
	personal_remaining_count?: number;
	background?: APIGiftBackground;
	unique_gift_variant_count?: number;
	publisher_chat?: APIChat;
}

export interface APIGiftInfo {
	gift: APIGift;
	owned_gift_id?: string;
	convert_star_count?: number;
	prepaid_upgrade_star_count?: number;
	is_upgrade_separate?: boolean;
	can_be_upgraded?: boolean;
	text?: string;
	entities?: APIMessageEntity[];
	is_private?: boolean;
	unique_gift_number?: number;
}

export enum UniqueGiftInfoOrigin {
	Upgrade = 'upgrade',
	Transfer = 'transfer',
	Resale = 'resale',
	GiftedUpgrade = 'gifted_upgrade',
	Offer = 'offer',
}

export enum UniqueGiftModelRarity {
	Uncommon = 'uncommon',
	Rare = 'rare',
	Epic = 'epic',
	Legendary = 'legendary',
}

export interface APIUniqueGiftModel {
	name: string;
	sticker: APISticker;
	rarity_per_mille: number;
	rarity?: UniqueGiftModelRarity;
}

export interface APIUniqueGiftSymbol {
	name: string;
	sticker: APISticker;
	rarity_per_mille: number;
}

export interface APIUniqueGiftBackdropColors {
	center_color: number;
	edge_color: number;
	symbol_color: number;
	text_color: number;
}

export interface APIUniqueGiftBackdrop {
	name: string;
	colors: APIUniqueGiftBackdropColors;
	rarity_per_mille: number;
}

export interface APIUniqueGiftColors {
	model_custom_emoji_id: string;
	symbol_custom_emoji_id: string;
	light_theme_main_color: number;
	light_theme_other_colors: number[];
	dark_theme_main_color: number;
	dark_theme_other_colors: number[];
}

export interface APIUniqueGift {
	gift_id: string;
	base_name: string;
	name: string;
	number: number;
	model: APIUniqueGiftModel;
	symbol: APIUniqueGiftSymbol;
	backdrop: APIUniqueGiftBackdrop;
	is_premium?: boolean;
	is_burned?: boolean;
	is_from_blockchain?: boolean;
	colors?: APIUniqueGiftColors;
	publisher_chat?: APIChat;
}

export interface APIUniqueGiftInfo {
	gift: APIUniqueGift;
	origin: UniqueGiftInfoOrigin;
	last_resale_currency?: string;
	last_resale_amount?: number;
	owned_gift_id?: string;
	transfer_star_count?: number;
	next_transfer_date?: number;
}

export interface APIWriteAccessAllowed {
	from_request?: boolean;
	web_app_name?: string;
	from_attachment_menu?: boolean;
}

export interface APIProximityAlertTriggered {
	traveler: APIUser;
	watcher: APIUser;
	distance: number;
}

export interface APIChatBoostAdded {
	boost_count: number;
}

export enum BackgroundTypeType {
	Fill = 'fill',
	Wallpaper = 'wallpaper',
	Pattern = 'pattern',
	ChatTheme = 'chat_theme',
}

export enum BackgroundFillType {
	Solid = 'solid',
	Gradient = 'gradient',
	FreeformGradient = 'freeform_gradient',
}

export interface BackgroundFillSolid {
	type: BackgroundFillType.Solid;
	color: number;
}

export interface BackgroundFillGradient {
	type: BackgroundFillType.Gradient;
	top_color: number;
	bottom_color: number;
	rotation_angle: number;
}

export interface BackgroundFillFreeformGradient {
	type: BackgroundFillType.Gradient;
	colors: number[];
}

export type APIBackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;

export interface APIBackgroundTypeFill {
	type: BackgroundTypeType.Fill;
	fill: APIBackgroundFill;
	dark_theme_dimming: number;
}

export interface APIBackgroundTypeWallpaper {
	type: BackgroundTypeType.Wallpaper;
	document: APIDocument;
	dark_theme_dimming: number;
	is_blurred?: boolean;
	is_moving?: boolean;
}

export interface APIBackgroundTypePattern {
	type: BackgroundTypeType.Pattern;
	document: APIDocument;
	fill: APIBackgroundFill;
	intensity: number;
	is_inverted?: boolean;
	is_moving?: boolean;
}

export interface APIBackgroundTypeChatTheme {
	type: BackgroundTypeType.ChatTheme;
	theme_name: string;
}

export type APIBackgroundType =
	| APIBackgroundTypeFill
	| APIBackgroundTypeWallpaper
	| APIBackgroundTypePattern
	| APIBackgroundTypeChatTheme;

export interface APIChatBackground {
	type: APIBackgroundType;
}

export interface APIChecklistTasksDone {
	checklist_message?: RepliedToMessageFrom<APIMessage>;
	marked_as_done_task_ids?: number[];
	marked_as_not_done_task_ids?: number[];
}

export interface APIChecklistTasksAdded {
	checklist_message?: RepliedToMessageFrom<APIMessage>;
	tasks: APIChecklistTask[];
}

export interface APIDirectMessagePriceChanged {
	are_direct_messages_enabled: boolean;
	direct_message_star_count?: number;
}

export interface APIForumTopicCreated {
	name: string;
	icon_color: number;
	icon_custom_emoji_id?: string;
	is_name_implicit?: boolean;
}

export interface APIForumTopicEdited {
	name?: string;
	icon_custom_emoji_id?: string;
}

export interface APIForumTopicClosed {}

export interface APIForumTopicReopened {}

export interface APIGeneralForumTopicHidden {}

export interface APIGeneralForumTopicUnhidden {}

export interface APIGiveawayCreated {
	prize_star_count?: number;
}

export interface APIGiveaway {
	chats: APIChat[];
	winners_selection_date: number;
	winner_count: number;
	only_new_members?: boolean;
	has_public_winners?: boolean;
	prize_description?: string;
	country_codes?: string[];
	prize_star_count?: number;
	premium_subscription_month_count?: number;
}

export interface APIGiveawayWinners {
	chat: APIChat;
	giveaway_message_id: number;
	winners_selection_date: number;
	winner_count: number;
	winners: APIUser[];
	additional_chat_count?: number;
	prize_star_count?: number;
	premium_subscription_month_count?: number;
	unclaimed_prize_count?: number;
	only_new_members?: boolean;
	was_refunded?: boolean;
	prize_description?: string;
}

export interface APIGiveawayCompleted {
	winner_count: number;
	unclaimed_prize_count?: number;
	giveaway_message?: APIMessage;
	is_star_giveaway?: boolean;
}

export interface APIManagedBotCreated {
	bot: APIUser;
}

export interface APIPaidMessagePriceChanged {
	paid_message_star_count: number;
}

export interface APIPollOptionAdded {
	poll_message?: RepliedToMessageFrom<APIMaybeInaccessibleMessage>;
	option_persistent_id: string;
	option_text: string;
	option_text_entities?: APIMessageEntity[];
}

export interface APIPollOptionDeleted {
	poll_message?: RepliedToMessageFrom<APIMaybeInaccessibleMessage>;
	option_persistent_id: string;
	option_text: string;
	option_text_entities?: APIMessageEntity[];
}

export interface APISuggestedPostApproved {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	price?: APISuggestedPostPrice;
	send_date: number;
}

export interface APISuggestedPostApprovalFailed {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	price: APISuggestedPostPrice;
}

export interface APISuggestedPostDeclined {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	comment?: string;
}

export interface APIStarAmount {
	amount: number;
	nanostar_amount?: number;
}

export interface APISuggestedPostPaid {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	currency: string;
	amount?: number;
	star_amount?: APIStarAmount;
}

export interface APISuggestedPostRefunded {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	reason: string;
}

export interface APIVideoChatScheduled {
	start_date: number;
}

export interface APIVideoChatStarted {}

export interface APIVideoChatEnded {
	duration: number;
}

export interface APIVideoChatParticipantsInvited {
	users: APIUser[];
}

export interface APIWebAppData {
	data: string;
	button_text: string;
}

export interface APIInaccessibleMessage extends APIMessageId {
	chat: APIChat;
	date: 0;
}

export type APIMaybeInaccessibleMessage = APIMessage | APIInaccessibleMessage;
