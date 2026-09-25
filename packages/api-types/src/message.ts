import { APIChatBackground } from './background.js';
import { APIChat } from './chat.js';
import { APIChecklist, APIChecklistTasksAdded, APIChecklistTasksDone } from './checklist.js';
import { APICommunityChatAdded, APICommunityChatJoined, APICommunityChatRemoved } from './community.js';
import {
	APIForumTopicClosed,
	APIForumTopicCreated,
	APIForumTopicEdited,
	APIForumTopicReopened,
	APIGeneralForumTopicHidden,
	APIGeneralForumTopicUnhidden,
} from './forum.js';
import { APIGame } from './game.js';
import { APIGiftInfo, APIUniqueGiftInfo } from './gift.js';
import { APIGiveaway, APIGiveawayCompleted, APIGiveawayCreated, APIGiveawayWinners } from './giveaway.js';
import { APIInlineKeyboardMarkup } from './keyboard.js';
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
import { APIPoll, APIPollOptionAdded, APIPollOptionDeleted } from './poll.js';
import { APIRichMessage } from './rich.js';
import {
	APISuggestedPostApprovalFailed,
	APISuggestedPostApproved,
	APISuggestedPostDeclined,
	APISuggestedPostInfo,
	APISuggestedPostPaid,
	APISuggestedPostRefunded,
} from './suggested-post.js';
import { APIUser } from './user.js';
import {
	APIVideoChatEnded,
	APIVideoChatParticipantsInvited,
	APIVideoChatScheduled,
	APIVideoChatStarted,
} from './video-chat.js';

/** Nested messages never carry their own `reply_to_message`. */
export type RepliedToMessageFrom<Message extends APIMaybeInaccessibleMessage> = Message extends APIMessage
	? Omit<Message, 'reply_to_message'>
	: Message;

export type APIMessage =
	| APIMessage.Text
	| APIMessage.RichMessage
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
	| APIMessage.MigrateToChatId
	| APIMessage.MigrateFromChatId
	| APIMessage.PinnedMessage
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
	| APIMessage.PassportData
	| APIMessage.ProximityAlertTriggered
	| APIMessage.BoostAdded
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
	export interface ServiceBase extends APIMessageId {
		message_thread_id?: number;
		direct_messages_topic?: APIDirectMessagesTopic;
		from?: APIUser;
		sender_chat?: APIChat;
		date: number;
		guest_query_id?: string;
		business_connection_id?: string;
		chat: APIChat;
		is_topic_message?: true;
	}

	export interface CommonBase extends ServiceBase {
		sender_boost_count?: number;
		sender_business_bot?: APIUser;
		sender_tag?: string;
		receiver_user?: APIUser;
		ephemeral_message_id?: number;
		forward_origin?: APIMessageOrigin;
		is_automatic_forward?: true;
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
		has_protected_content?: true;
		is_from_offline?: true;
		is_paid_post?: true;
		author_signature?: string;
		paid_star_count?: number;
		link_preview_options?: APILinkPreviewOptions;
		suggested_post_info?: APISuggestedPostInfo;
		effect_id?: string;
		reply_markup?: APIInlineKeyboardMarkup;
	}

	export interface CaptionableBase extends CommonBase {
		caption?: string;
		caption_entities?: APIMessageEntity[];
		show_caption_above_media?: true;
	}

	export interface MediaBase extends CaptionableBase {
		media_group_id?: string;
		has_media_spoiler?: true;
	}

	export interface Text extends CommonBase {
		text: string;
		entities?: APIMessageEntity[];
	}

	export interface RichMessage extends CommonBase {
		rich_message: APIRichMessage;
	}

	export interface Animation extends Document {
		animation: APIAnimation;
	}

	export interface Audio extends MediaBase {
		audio: APIAudio;
	}

	export interface Document extends MediaBase {
		document: APIDocument;
	}

	export interface LivePhoto extends Photo {
		live_photo: APILivePhoto;
	}

	export interface PaidMedia extends CaptionableBase {
		paid_media: APIPaidMediaInfo;
	}

	export interface Photo extends MediaBase {
		photo: APIPhotoSize[];
	}

	export interface Sticker extends CommonBase {
		sticker: APISticker;
	}

	export interface Story extends CommonBase {
		story: APIStory;
	}

	export interface Video extends MediaBase {
		video: APIVideo;
	}

	export interface VideoNote extends CommonBase {
		video_note: APIVideoNote;
	}

	export interface Voice extends CaptionableBase {
		voice: APIVoice;
	}

	export interface Checklist extends CommonBase {
		checklist: APIChecklist;
	}

	export interface Contact extends CommonBase {
		contact: APIContact;
	}

	export interface Dice extends CommonBase {
		dice: APIDice;
	}

	export interface Game extends CommonBase {
		game: APIGame;
	}

	export interface Poll extends CommonBase {
		poll: APIPoll;
	}

	export interface Venue extends Location {
		venue: APIVenue;
	}

	export interface Location extends CommonBase {
		location: APILocation;
	}

	export interface NewChatMembers extends ServiceBase {
		new_chat_members: APIUser[];
	}

	export interface LeftChatMember extends ServiceBase {
		left_chat_member: APIUser;
	}

	export interface ChatOwnerLeft extends ServiceBase {
		chat_owner_left: APIChatOwnerLeft;
	}

	export interface ChatOwnerChanged extends ServiceBase {
		chat_owner_changed: APIChatOwnerChanged;
	}

	export interface NewChatTitle extends ServiceBase {
		new_chat_title: string;
	}

	export interface NewChatPhoto extends ServiceBase {
		new_chat_photo: APIPhotoSize[];
	}

	export interface DeleteChatPhoto extends ServiceBase {
		delete_chat_photo: true;
	}

	export interface GroupChatCreated extends ServiceBase {
		group_chat_created: true;
	}

	export interface SupergroupChatCreated extends ServiceBase {
		supergroup_chat_created: true;
	}

	export interface ChannelChatCreated extends ServiceBase {
		channel_chat_created: true;
	}

	export interface MessageAutoDeleteTimerChanged extends ServiceBase {
		message_auto_delete_timer_changed: APIMessageAutoDeleteTimerChanged;
	}

	export interface MigrateToChatId extends ServiceBase {
		migrate_to_chat_id: number;
	}

	export interface MigrateFromChatId extends ServiceBase {
		migrate_from_chat_id: number;
	}

	export interface PinnedMessage extends ServiceBase {
		pinned_message: RepliedToMessageFrom<APIMaybeInaccessibleMessage>;
	}

	export interface Invoice extends CommonBase {
		invoice: APIInvoice;
	}

	export interface SuccessfulPayment extends ServiceBase {
		successful_payment: APISuccessfulPayment;
	}

	export interface RefundedPayment extends ServiceBase {
		refunded_payment: APIRefundedPayment;
	}

	export interface UsersShared extends ServiceBase {
		users_shared: APIUsersShared;
	}

	export interface ChatShared extends ServiceBase {
		chat_shared: APIChatShared;
	}

	export interface Gift extends ServiceBase {
		gift: APIGiftInfo;
	}

	export interface UniqueGift extends ServiceBase {
		unique_gift: APIUniqueGiftInfo;
	}

	export interface GiftUpgradeSent extends ServiceBase {
		gift_upgrade_sent: APIGiftInfo;
	}

	export interface ConnectedWebsite extends ServiceBase {
		connected_website: string;
	}

	export interface WriteAccessAllowed extends ServiceBase {
		write_access_allowed: APIWriteAccessAllowed;
	}

	export interface PassportData extends CommonBase {
		passport_data: APIPassportData;
	}

	export interface ProximityAlertTriggered extends ServiceBase {
		proximity_alert_triggered: APIProximityAlertTriggered;
	}

	export interface BoostAdded extends ServiceBase {
		boost_added: APIChatBoostAdded;
	}

	export interface ChatBackgroundSet extends ServiceBase {
		chat_background_set: APIChatBackground;
	}

	export interface ChecklistTasksDone extends ServiceBase {
		checklist_tasks_done: APIChecklistTasksDone;
	}

	export interface ChecklistTasksAdded extends ServiceBase {
		checklist_tasks_added: APIChecklistTasksAdded;
	}

	export interface CommunityChatAdded extends ServiceBase {
		community_chat_added: APICommunityChatAdded;
	}

	export interface CommunityChatJoined extends ServiceBase {
		community_chat_joined: APICommunityChatJoined;
	}

	export interface CommunityChatRemoved extends ServiceBase {
		community_chat_removed: APICommunityChatRemoved;
	}

	export interface DirectMessagePriceChanged extends ServiceBase {
		direct_message_price_changed: APIDirectMessagePriceChanged;
	}

	export interface ForumTopicCreated extends ServiceBase {
		forum_topic_created: APIForumTopicCreated;
	}

	export interface ForumTopicEdited extends ServiceBase {
		forum_topic_edited: APIForumTopicEdited;
	}

	export interface ForumTopicClosed extends ServiceBase {
		forum_topic_closed: APIForumTopicClosed;
	}

	export interface ForumTopicReopened extends ServiceBase {
		forum_topic_reopened: APIForumTopicReopened;
	}

	export interface GeneralForumTopicHidden extends ServiceBase {
		general_forum_topic_hidden: APIGeneralForumTopicHidden;
	}

	export interface GeneralForumTopicUnhidden extends ServiceBase {
		general_forum_topic_unhidden: APIGeneralForumTopicUnhidden;
	}

	export interface GiveawayCreated extends ServiceBase {
		giveaway_created: APIGiveawayCreated;
	}

	export interface Giveaway extends CommonBase {
		giveaway: APIGiveaway;
	}

	export interface GiveawayWinners extends CommonBase {
		giveaway_winners: APIGiveawayWinners;
	}

	export interface GiveawayCompleted extends ServiceBase {
		giveaway_completed: APIGiveawayCompleted;
	}

	export interface ManagedBotCreated extends ServiceBase {
		managed_bot_created: APIManagedBotCreated;
	}

	export interface PaidMessagePriceChanged extends ServiceBase {
		paid_message_price_changed: APIPaidMessagePriceChanged;
	}

	export interface PollOptionAdded extends ServiceBase {
		poll_option_added: APIPollOptionAdded;
	}

	export interface PollOptionDeleted extends ServiceBase {
		poll_option_deleted: APIPollOptionDeleted;
	}

	export interface SuggestedPostApproved extends ServiceBase {
		suggested_post_approved: APISuggestedPostApproved;
	}

	export interface SuggestedPostApprovalFailed extends ServiceBase {
		suggested_post_approval_failed: APISuggestedPostApprovalFailed;
	}

	export interface SuggestedPostDeclined extends ServiceBase {
		suggested_post_declined: APISuggestedPostDeclined;
	}

	export interface SuggestedPostPaid extends ServiceBase {
		suggested_post_paid: APISuggestedPostPaid;
	}

	export interface SuggestedPostRefunded extends ServiceBase {
		suggested_post_refunded: APISuggestedPostRefunded;
	}

	export interface VideoChatScheduled extends ServiceBase {
		video_chat_scheduled: APIVideoChatScheduled;
	}

	export interface VideoChatStarted extends ServiceBase {
		video_chat_started: APIVideoChatStarted;
	}

	export interface VideoChatEnded extends ServiceBase {
		video_chat_ended: APIVideoChatEnded;
	}

	export interface VideoChatParticipantsInvited extends ServiceBase {
		video_chat_participants_invited: APIVideoChatParticipantsInvited;
	}

	export interface WebAppData extends ServiceBase {
		web_app_data: APIWebAppData;
	}
}

export interface APIMessageId {
	message_id: number;
}

export interface APIInaccessibleMessage extends APIMessageId {
	chat: APIChat;
	date: 0;
}

export type APIMaybeInaccessibleMessage = APIMessage | APIInaccessibleMessage;

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

export interface APITextQuote {
	text: string;
	entities?: APIMessageEntity[];
	position: number;
	is_manual?: true;
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

export interface APIEphemeralMessageParameters {
	receiver_user_id: number;
	callback_query_id?: string;
	replace_callback_query_message?: boolean;
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
	has_media_spoiler?: true;
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

export interface APIStory {
	chat: APIChat;
	id: number;
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
	Basketball = '🏀',
	Soccer = '⚽',
	Bowling = '🎳',
	SlotMachine = '🎰',
}

export interface APIDice {
	emoji: DiceEmoji;
	value: number;
}

export interface APILink {
	url: string;
}

export interface APILocation {
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
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

export interface APIWebAppData {
	data: string;
	button_text: string;
}

export interface APIProximityAlertTriggered {
	traveler: APIUser;
	watcher: APIUser;
	distance: number;
}

export interface APIMessageAutoDeleteTimerChanged {
	message_auto_delete_time: number;
}

export interface APIManagedBotCreated {
	bot: APIUser;
}

export interface APIChatBoostAdded {
	boost_count: number;
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

export interface APIWriteAccessAllowed {
	from_request?: boolean;
	web_app_name?: string;
	from_attachment_menu?: boolean;
}

export interface APIPaidMessagePriceChanged {
	paid_message_star_count: number;
}

export interface APIDirectMessagePriceChanged {
	are_direct_messages_enabled: boolean;
	direct_message_star_count?: number;
}

export interface APILinkPreviewOptions {
	is_disabled?: boolean;
	url?: string;
	prefer_small_media?: boolean;
	prefer_large_media?: boolean;
	show_above_text?: boolean;
}

export interface APIDirectMessagesTopic {
	topic_id: number;
	user?: APIUser;
}

export interface APIChatOwnerLeft {
	new_owner?: APIUser;
}

export interface APIChatOwnerChanged {
	new_owner: APIUser;
}
