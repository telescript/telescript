import { APIChat, APIReactionType } from './chat.js';
import { APIGame } from './games.js';
import { APILocation, APILocationAddress } from './location.js';
import {
	APICopyTextButton,
	APIDisabledButton,
	APIInlineKeyboardMarkup,
	APILoginURL,
	APISwitchInlineQueryChosenChat,
	APIWebAppInfo,
} from './markup.js';
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

export interface APICommunityChatJoined {
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
	Button = 'button',
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
		| Button
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

	export type FromType<Type extends RichTextType> = Extract<Object, { type: Type }>;
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
	align: RichBlockTableCellAlign;
	valign: RichBlockTableCellValign;
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

export enum RichBlockButtonsAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
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
	ExpandableBlockQuotation = 'expandable_blockquote',
	PullQuotation = 'pullquote',
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

	export interface ExpandableBlockQuotation extends Base<RichBlockType.ExpandableBlockQuotation> {
		text: APIRichText;
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
		is_compact?: boolean;
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

	export interface Buttons extends Base<RichBlockType.Buttons> {
		buttons: APIRichMessageButton[];
		align?: RichBlockButtonsAlign;
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

	export interface Document extends Base<RichBlockType.Document> {
		document: APIDocument;
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

export type RepliedToMessageFrom<Message extends APIMessageId> = Message extends unknown
	? Omit<Message, 'reply_to_message'>
	: never;

export enum MessageType {
	Text = 'text',
	RichBlocks = 'rich_message',
	Animation = 'animation',
	Audio = 'audio',
	Document = 'document',
	LivePhoto = 'live_photo',
	PaidMedia = 'paid_media',
	Photo = 'photo',
	Sticker = 'sticker',
	Story = 'story',
	Video = 'video',
	VideoNote = 'video_note',
	Voice = 'voice',
	Checklist = 'checklist',
	Contact = 'contact',
	Dice = 'dice',
	Game = 'game',
	Poll = 'poll',
	Venue = 'venue',
	Location = 'location',
	NewChatMembers = 'new_chat_members',
	LeftChatMember = 'left_chat_member',
	ChatOwnerLeft = 'chat_owner_left',
	ChatOwnerChanged = 'chat_owner_changed',
	NewChatTitle = 'new_chat_title',
	NewChatPhoto = 'new_chat_photo',
	DeleteChatPhoto = 'delete_chat_photo',
	GroupChatCreated = 'group_chat_created',
	SupergroupChatCreated = 'supergroup_chat_created',
	ChannelChatCreated = 'channel_chat_created',
	MessageAutoDeleteTimerChanged = 'message_auto_delete_timer_changed',
	MigrateToChat = 'migrate_to_chat_id',
	MigrateFromChat = 'migrate_from_chat_id',
	Pinned = 'pinned_message',
	Invoice = 'invoice',
	SuccessfulPayment = 'successful_payment',
	RefundedPayment = 'refunded_payment',
	UsersShared = 'users_shared',
	ChatShared = 'chat_shared',
	Gift = 'gift',
	UniqueGift = 'unique_gift',
	GiftUpgradeSent = 'gift_upgrade_sent',
	ConnectedWebsite = 'connected_website',
	WriteAccessAllowed = 'write_access_allowed',
	Passport = 'passport_data',
	ProximityAlert = 'proximity_alert_triggered',
	ChatBoostAdded = 'boost_added',
	ChatBackgroundSet = 'chat_background_set',
	ChecklistTasksDone = 'checklist_tasks_done',
	ChecklistTasksAdded = 'checklist_tasks_added',
	CommunityChatAdded = 'community_chat_added',
	CommunityChatJoined = 'community_chat_joined',
	CommunityChatRemoved = 'community_chat_removed',
	DirectMessagePriceChanged = 'direct_message_price_changed',
	ForumTopicCreated = 'forum_topic_created',
	ForumTopicEdited = 'forum_topic_edited',
	ForumTopicClosed = 'forum_topic_closed',
	ForumTopicReopened = 'forum_topic_reopened',
	GeneralForumTopicHidden = 'general_forum_topic_hidden',
	GeneralForumTopicUnhidden = 'general_forum_topic_unhidden',
	GiveawayCreated = 'giveaway_created',
	Giveaway = 'giveaway',
	GiveawayWinners = 'giveaway_winners',
	GiveawayCompleted = 'giveaway_completed',
	ManagedBotCreated = 'managed_bot_created',
	PaidMessagePriceChanged = 'paid_message_price_changed',
	PollOptionAdded = 'poll_option_added',
	PollOptionDeleted = 'poll_option_deleted',
	SuggestedPostApproved = 'suggested_post_approved',
	SuggestedPostApprovalFailed = 'suggested_post_approval_failed',
	SuggestedPostDeclined = 'suggested_post_declined',
	SuggestedPostPaid = 'suggested_post_paid',
	SuggestedPostRefunded = 'suggested_post_refunded',
	VideoChatScheduled = 'video_chat_scheduled',
	VideoChatStarted = 'video_chat_started',
	VideoChatEnded = 'video_chat_ended',
	VideoChatParticipantsInvited = 'video_chat_participants_invited',
	WebAppData = 'web_app_data',
}

export namespace MessageType {
	/**
	 * Messages that can have a caption.
	 */
	export type Captioned =
		| MessageType.Animation
		| MessageType.Audio
		| MessageType.Document
		| MessageType.LivePhoto
		| MessageType.PaidMedia
		| MessageType.Photo
		| MessageType.Video
		| MessageType.Voice;

	/**
	 * Messages with visual media that can be covered by a spoiler and show the caption above the media.
	 */
	export type Visual = MessageType.Animation | MessageType.LivePhoto | MessageType.Photo | MessageType.Video;

	/**
	 * Messages that can be grouped into an album (media group).
	 */
	export type Groupable =
		| MessageType.Audio
		| MessageType.Document
		| MessageType.LivePhoto
		| MessageType.Photo
		| MessageType.Video;
}

export type APIMessage =
	| APIMessage.Text
	| APIMessage.RichBlocks
	| APIMessage.Animation
	| APIMessage.Audio
	| APIMessage.Document
	| APIMessage.LivePhoto
	| APIMessage.PaidMedia
	| APIMessage.Photo
	| APIMessage.Sticker
	| APIMessage.Story
	| APIMessage.Video
	| APIMessage.VideoNote
	| APIMessage.Voice
	| APIMessage.Checklist
	| APIMessage.Contact
	| APIMessage.Dice
	| APIMessage.Game
	| APIMessage.Poll
	| APIMessage.Venue
	| APIMessage.Location
	| APIMessage.NewChatMembers
	| APIMessage.LeftChatMember
	| APIMessage.ChatOwnerLeft
	| APIMessage.ChatOwnerChanged
	| APIMessage.NewChatTitle
	| APIMessage.NewChatPhoto
	| APIMessage.DeleteChatPhoto
	| APIMessage.GroupChatCreated
	| APIMessage.SupergroupChatCreated
	| APIMessage.ChannelChatCreated
	| APIMessage.MessageAutoDeleteTimerChanged
	| APIMessage.MigrateToChat
	| APIMessage.MigrateFromChat
	| APIMessage.Pinned
	| APIMessage.Invoice
	| APIMessage.SuccessfulPayment
	| APIMessage.RefundedPayment
	| APIMessage.UsersShared
	| APIMessage.ChatShared
	| APIMessage.Gift
	| APIMessage.UniqueGift
	| APIMessage.GiftUpgradeSent
	| APIMessage.ConnectedWebsite
	| APIMessage.WriteAccessAllowed
	| APIMessage.Passport
	| APIMessage.ProximityAlert
	| APIMessage.ChatBoostAdded
	| APIMessage.ChatBackgroundSet
	| APIMessage.ChecklistTasksDone
	| APIMessage.ChecklistTasksAdded
	| APIMessage.CommunityChatAdded
	| APIMessage.CommunityChatJoined
	| APIMessage.CommunityChatRemoved
	| APIMessage.DirectMessagePriceChanged
	| APIMessage.ForumTopicCreated
	| APIMessage.ForumTopicEdited
	| APIMessage.ForumTopicClosed
	| APIMessage.ForumTopicReopened
	| APIMessage.GeneralForumTopicHidden
	| APIMessage.GeneralForumTopicUnhidden
	| APIMessage.GiveawayCreated
	| APIMessage.Giveaway
	| APIMessage.GiveawayWinners
	| APIMessage.GiveawayCompleted
	| APIMessage.ManagedBotCreated
	| APIMessage.PaidMessagePriceChanged
	| APIMessage.PollOptionAdded
	| APIMessage.PollOptionDeleted
	| APIMessage.SuggestedPostApproved
	| APIMessage.SuggestedPostApprovalFailed
	| APIMessage.SuggestedPostDeclined
	| APIMessage.SuggestedPostPaid
	| APIMessage.SuggestedPostRefunded
	| APIMessage.VideoChatScheduled
	| APIMessage.VideoChatStarted
	| APIMessage.VideoChatEnded
	| APIMessage.VideoChatParticipantsInvited
	| APIMessage.WebAppData;

export namespace APIMessage {
	export interface Base extends APIMessageId {
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
		author_signature?: string;
		paid_star_count?: number;
		suggested_post_info?: APISuggestedPostInfo;
		effect_id?: string;
		reply_markup?: APIInlineKeyboardMarkup;
	}

	export interface CaptionedBase {
		caption?: string;
		caption_entities?: APIMessageEntity[];
	}

	export interface GroupableBase {
		media_group_id?: string;
	}

	export interface VisualBase {
		show_caption_above_media?: boolean;
		has_media_spoiler?: boolean;
	}

	export interface Text extends Base {
		text: string;
		entities?: APIMessageEntity[];
		link_preview_options?: APILinkPreviewOptions;
	}

	export interface RichBlocks extends Base {
		rich_message: APIRichMessage;
	}

	export interface Animation extends Base, CaptionedBase, VisualBase {
		animation: APIAnimation;
	}

	export interface Audio extends Base, CaptionedBase, GroupableBase {
		audio: APIAudio;
	}

	export interface Document extends Base, CaptionedBase, GroupableBase {
		document: APIDocument;
	}

	export interface LivePhoto extends Base, CaptionedBase, VisualBase, GroupableBase {
		live_photo: APILivePhoto;
		photo?: APIPhotoSize[];
	}

	export interface PaidMedia extends Base, CaptionedBase {
		paid_media: APIPaidMediaInfo;
		show_caption_above_media?: boolean;
	}

	export interface Photo extends Base, CaptionedBase, VisualBase, GroupableBase {
		photo: APIPhotoSize[];
	}

	export interface Sticker extends Base {
		sticker: APISticker;
	}

	export interface Story extends Base {
		story: APIStory;
	}

	export interface Video extends Base, CaptionedBase, VisualBase, GroupableBase {
		video: APIVideo;
	}

	export interface VideoNote extends Base {
		video_note: APIVideoNote;
	}

	export interface Voice extends Base, CaptionedBase {
		voice: APIVoice;
	}

	export interface Checklist extends Base {
		checklist: APIChecklist;
	}

	export interface Contact extends Base {
		contact: APIContact;
	}

	export interface Dice extends Base {
		dice: APIDice;
	}

	export interface Game extends Base {
		game: APIGame;
	}

	export interface Poll extends Base {
		poll: APIPoll;
	}

	export interface Venue extends Base {
		venue: APIVenue;
	}

	export interface Location extends Base {
		location: APILocation;
	}

	export interface NewChatMembers extends Base {
		new_chat_members: APIUser[];
	}

	export interface LeftChatMember extends Base {
		left_chat_member: APIUser;
	}

	export interface ChatOwnerLeft extends Base {
		chat_owner_left: APIChatOwnerLeft;
	}

	export interface ChatOwnerChanged extends Base {
		chat_owner_changed: APIChatOwnerChanged;
	}

	export interface NewChatTitle extends Base {
		new_chat_title: string;
	}

	export interface NewChatPhoto extends Base {
		new_chat_photo: APIPhotoSize[];
	}

	export interface DeleteChatPhoto extends Base {
		delete_chat_photo: true;
	}

	export interface GroupChatCreated extends Base {
		group_chat_created: true;
	}

	export interface SupergroupChatCreated extends Base {
		supergroup_chat_created: true;
	}

	export interface ChannelChatCreated extends Base {
		channel_chat_created: true;
	}

	export interface MessageAutoDeleteTimerChanged extends Base {
		message_auto_delete_timer_changed: APIMessageAutoDeleteTimerChanged;
	}

	export interface MigrateToChat extends Base {
		migrate_to_chat_id: number;
	}

	export interface MigrateFromChat extends Base {
		migrate_from_chat_id: number;
	}

	export interface Pinned extends Base {
		pinned_message: APIMaybeInaccessibleMessage;
	}

	export interface Invoice extends Base {
		invoice: APIInvoice;
	}

	export interface SuccessfulPayment extends Base {
		successful_payment: APISuccessfulPayment;
	}

	export interface RefundedPayment extends Base {
		refunded_payment: APIRefundedPayment;
	}

	export interface UsersShared extends Base {
		users_shared: APIUsersShared;
	}

	export interface ChatShared extends Base {
		chat_shared: APIChatShared;
	}

	export interface Gift extends Base {
		gift: APIGiftInfo;
	}

	export interface UniqueGift extends Base {
		unique_gift: APIUniqueGiftInfo;
	}

	export interface GiftUpgradeSent extends Base {
		gift_upgrade_sent: APIGiftInfo;
	}

	export interface ConnectedWebsite extends Base {
		connected_website: string;
	}

	export interface WriteAccessAllowed extends Base {
		write_access_allowed: APIWriteAccessAllowed;
	}

	export interface Passport extends Base {
		passport_data: APIPassportData;
	}

	export interface ProximityAlert extends Base {
		proximity_alert_triggered: APIProximityAlertTriggered;
	}

	export interface ChatBoostAdded extends Base {
		boost_added: APIChatBoostAdded;
	}

	export interface ChatBackgroundSet extends Base {
		chat_background_set: APIChatBackground;
	}

	export interface ChecklistTasksDone extends Base {
		checklist_tasks_done: APIChecklistTasksDone;
	}

	export interface ChecklistTasksAdded extends Base {
		checklist_tasks_added: APIChecklistTasksAdded;
	}

	export interface CommunityChatAdded extends Base {
		community_chat_added: APICommunityChatAdded;
	}

	export interface CommunityChatJoined extends Base {
		community_chat_joined: APICommunityChatJoined;
	}

	export interface CommunityChatRemoved extends Base {
		community_chat_removed: APICommunityChatRemoved;
	}

	export interface DirectMessagePriceChanged extends Base {
		direct_message_price_changed: APIDirectMessagePriceChanged;
	}

	export interface ForumTopicCreated extends Base {
		forum_topic_created: APIForumTopicCreated;
	}

	export interface ForumTopicEdited extends Base {
		forum_topic_edited: APIForumTopicEdited;
	}

	export interface ForumTopicClosed extends Base {
		forum_topic_closed: APIForumTopicClosed;
	}

	export interface ForumTopicReopened extends Base {
		forum_topic_reopened: APIForumTopicReopened;
	}

	export interface GeneralForumTopicHidden extends Base {
		general_forum_topic_hidden: APIGeneralForumTopicHidden;
	}

	export interface GeneralForumTopicUnhidden extends Base {
		general_forum_topic_unhidden: APIGeneralForumTopicUnhidden;
	}

	export interface GiveawayCreated extends Base {
		giveaway_created: APIGiveawayCreated;
	}

	export interface Giveaway extends Base {
		giveaway: APIGiveaway;
	}

	export interface GiveawayWinners extends Base {
		giveaway_winners: APIGiveawayWinners;
	}

	export interface GiveawayCompleted extends Base {
		giveaway_completed: APIGiveawayCompleted;
	}

	export interface ManagedBotCreated extends Base {
		managed_bot_created: APIManagedBotCreated;
	}

	export interface PaidMessagePriceChanged extends Base {
		paid_message_price_changed: APIPaidMessagePriceChanged;
	}

	export interface PollOptionAdded extends Base {
		poll_option_added: APIPollOptionAdded;
	}

	export interface PollOptionDeleted extends Base {
		poll_option_deleted: APIPollOptionDeleted;
	}

	export interface SuggestedPostApproved extends Base {
		suggested_post_approved: APISuggestedPostApproved;
	}

	export interface SuggestedPostApprovalFailed extends Base {
		suggested_post_approval_failed: APISuggestedPostApprovalFailed;
	}

	export interface SuggestedPostDeclined extends Base {
		suggested_post_declined: APISuggestedPostDeclined;
	}

	export interface SuggestedPostPaid extends Base {
		suggested_post_paid: APISuggestedPostPaid;
	}

	export interface SuggestedPostRefunded extends Base {
		suggested_post_refunded: APISuggestedPostRefunded;
	}

	export interface VideoChatScheduled extends Base {
		video_chat_scheduled: APIVideoChatScheduled;
	}

	export interface VideoChatStarted extends Base {
		video_chat_started: APIVideoChatStarted;
	}

	export interface VideoChatEnded extends Base {
		video_chat_ended: APIVideoChatEnded;
	}

	export interface VideoChatParticipantsInvited extends Base {
		video_chat_participants_invited: APIVideoChatParticipantsInvited;
	}

	export interface WebAppData extends Base {
		web_app_data: APIWebAppData;
	}

	export interface TypeMap {
		[MessageType.Text]: Text;
		[MessageType.RichBlocks]: RichBlocks;
		[MessageType.Animation]: Animation;
		[MessageType.Audio]: Audio;
		[MessageType.Document]: Document;
		[MessageType.LivePhoto]: LivePhoto;
		[MessageType.PaidMedia]: PaidMedia;
		[MessageType.Photo]: Photo;
		[MessageType.Sticker]: Sticker;
		[MessageType.Story]: Story;
		[MessageType.Video]: Video;
		[MessageType.VideoNote]: VideoNote;
		[MessageType.Voice]: Voice;
		[MessageType.Checklist]: Checklist;
		[MessageType.Contact]: Contact;
		[MessageType.Dice]: Dice;
		[MessageType.Game]: Game;
		[MessageType.Poll]: Poll;
		[MessageType.Venue]: Venue;
		[MessageType.Location]: Location;
		[MessageType.NewChatMembers]: NewChatMembers;
		[MessageType.LeftChatMember]: LeftChatMember;
		[MessageType.ChatOwnerLeft]: ChatOwnerLeft;
		[MessageType.ChatOwnerChanged]: ChatOwnerChanged;
		[MessageType.NewChatTitle]: NewChatTitle;
		[MessageType.NewChatPhoto]: NewChatPhoto;
		[MessageType.DeleteChatPhoto]: DeleteChatPhoto;
		[MessageType.GroupChatCreated]: GroupChatCreated;
		[MessageType.SupergroupChatCreated]: SupergroupChatCreated;
		[MessageType.ChannelChatCreated]: ChannelChatCreated;
		[MessageType.MessageAutoDeleteTimerChanged]: MessageAutoDeleteTimerChanged;
		[MessageType.MigrateToChat]: MigrateToChat;
		[MessageType.MigrateFromChat]: MigrateFromChat;
		[MessageType.Pinned]: Pinned;
		[MessageType.Invoice]: Invoice;
		[MessageType.SuccessfulPayment]: SuccessfulPayment;
		[MessageType.RefundedPayment]: RefundedPayment;
		[MessageType.UsersShared]: UsersShared;
		[MessageType.ChatShared]: ChatShared;
		[MessageType.Gift]: Gift;
		[MessageType.UniqueGift]: UniqueGift;
		[MessageType.GiftUpgradeSent]: GiftUpgradeSent;
		[MessageType.ConnectedWebsite]: ConnectedWebsite;
		[MessageType.WriteAccessAllowed]: WriteAccessAllowed;
		[MessageType.Passport]: Passport;
		[MessageType.ProximityAlert]: ProximityAlert;
		[MessageType.ChatBoostAdded]: ChatBoostAdded;
		[MessageType.ChatBackgroundSet]: ChatBackgroundSet;
		[MessageType.ChecklistTasksDone]: ChecklistTasksDone;
		[MessageType.ChecklistTasksAdded]: ChecklistTasksAdded;
		[MessageType.CommunityChatAdded]: CommunityChatAdded;
		[MessageType.CommunityChatJoined]: CommunityChatJoined;
		[MessageType.CommunityChatRemoved]: CommunityChatRemoved;
		[MessageType.DirectMessagePriceChanged]: DirectMessagePriceChanged;
		[MessageType.ForumTopicCreated]: ForumTopicCreated;
		[MessageType.ForumTopicEdited]: ForumTopicEdited;
		[MessageType.ForumTopicClosed]: ForumTopicClosed;
		[MessageType.ForumTopicReopened]: ForumTopicReopened;
		[MessageType.GeneralForumTopicHidden]: GeneralForumTopicHidden;
		[MessageType.GeneralForumTopicUnhidden]: GeneralForumTopicUnhidden;
		[MessageType.GiveawayCreated]: GiveawayCreated;
		[MessageType.Giveaway]: Giveaway;
		[MessageType.GiveawayWinners]: GiveawayWinners;
		[MessageType.GiveawayCompleted]: GiveawayCompleted;
		[MessageType.ManagedBotCreated]: ManagedBotCreated;
		[MessageType.PaidMessagePriceChanged]: PaidMessagePriceChanged;
		[MessageType.PollOptionAdded]: PollOptionAdded;
		[MessageType.PollOptionDeleted]: PollOptionDeleted;
		[MessageType.SuggestedPostApproved]: SuggestedPostApproved;
		[MessageType.SuggestedPostApprovalFailed]: SuggestedPostApprovalFailed;
		[MessageType.SuggestedPostDeclined]: SuggestedPostDeclined;
		[MessageType.SuggestedPostPaid]: SuggestedPostPaid;
		[MessageType.SuggestedPostRefunded]: SuggestedPostRefunded;
		[MessageType.VideoChatScheduled]: VideoChatScheduled;
		[MessageType.VideoChatStarted]: VideoChatStarted;
		[MessageType.VideoChatEnded]: VideoChatEnded;
		[MessageType.VideoChatParticipantsInvited]: VideoChatParticipantsInvited;
		[MessageType.WebAppData]: WebAppData;
	}

	export type FromType<Type extends MessageType> = [Type] extends [never] ? Base : TypeMap[Type];
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

export interface APISuggestedPostParameters {
	price?: APISuggestedPostPrice;
	send_date?: number;
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

export interface APIInputPollOption {
	text: string;
	text_parse_mode?: string;
	text_entities?: APIMessageEntity[];
	// InputPollOptionMedia: the InputMedia types are not modeled yet.
	media?: unknown;
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
	text?: string;
	entities?: APIMessageEntity[];
	is_private?: boolean;
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
	type: BackgroundFillType.FreeformGradient;
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

export interface APIEphemeralMessageParameters {
	receiver_user_id: number;
	callback_query_id?: string;
	replace_callback_query_message?: boolean;
}

export interface APIReplyParameters {
	message_id?: number;
	chat_id?: number | string;
	ephemeral_message_id?: number;
	allow_sending_without_reply?: boolean;
	quote?: string;
	quote_parse_mode?: string;
	quote_entities?: APIMessageEntity[];
	quote_position?: number;
	checklist_task_id?: number;
	poll_option_id?: string;
}

export interface APIStoryAreaPosition {
	x_percentage: number;
	y_percentage: number;
	width_percentage: number;
	height_percentage: number;
	rotation_angle: number;
	corner_radius_percentage: number;
}

export enum StoryAreaType {
	Location = 'location',
	SuggestedReaction = 'suggested_reaction',
	Link = 'link',
	Weather = 'weather',
	UniqueGift = 'unique_gift',
}

export type APIStoryAreaType =
	| APIStoryAreaType.Location
	| APIStoryAreaType.SuggestedReaction
	| APIStoryAreaType.Link
	| APIStoryAreaType.Weather
	| APIStoryAreaType.UniqueGift;

export namespace APIStoryAreaType {
	export interface Location {
		type: StoryAreaType.Location;
		latitude: number;
		longitude: number;
		address?: APILocationAddress;
	}

	export interface SuggestedReaction {
		type: StoryAreaType.SuggestedReaction;
		reaction_type: APIReactionType;
		is_dark?: boolean;
		is_flipped?: boolean;
	}

	export interface Link {
		type: StoryAreaType.Link;
		url: string;
	}

	export interface Weather {
		type: StoryAreaType.Weather;
		temperature: number;
		emoji: string;
		background_color: number;
	}

	export interface UniqueGift {
		type: StoryAreaType.UniqueGift;
		name: string;
	}
}

export interface APIStoryArea {
	position: APIStoryAreaPosition;
	type: APIStoryAreaType;
}
