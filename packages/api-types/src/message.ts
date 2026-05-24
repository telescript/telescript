import { APIChat } from './chat.js';
import {
	APIAnimation,
	APIAudio,
	APIDocument,
	APILivePhoto,
	APIPaidMedia,
	APIPhotoSize,
	APISticker,
	APIVideo,
	APIVideoNote,
	APIVoice,
} from './media.js';
import { APIPassportData } from './passport.js';
import { APIInvoice, APIRefundedPayment, APISuccessfulPayment } from './payments.js';
import { APIUser } from './user.js';

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
	date: number;
	guest_query_id?: string;
	business_connection_id?: string;
	chat: APIChat;
	forward_origin?: APIMessageOrigin;
	is_topic_message?: true;
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
	media_group_id?: string;
	author_signature?: string;
	paid_star_count?: number;
	text?: string;
	entities?: APIMessageEntity[];
	link_preview_options?: APILinkPreviewOptions;
	suggested_post_info?: APISuggestedPostInfo;
	effect_id?: string;
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	live_photo?: APILivePhoto;
	paid_media?: APIPaidMedia;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	story?: APIStory;
	video?: APIVideo;
	video_note?: APIVideoNote;
	voice?: APIVoice;
	caption?: string;
	caption_entities?: APIMessageEntity[];
	show_caption_above_media?: true;
	has_media_spoiler?: true;
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
	delete_chat_photo?: true;
	group_chat_created?: true;
	supergroup_chat_created?: true;
	channel_chat_created?: true;
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
	unique_gift: APIUniqueGiftInfo;
	gift_upgrade_sent: APIGiftInfo;
	connected_website?: string;
	write_access_allowed?: APIWriteAccessAllowed;
	passport_data?: APIPassportData;
	proximity_alert_triggered?: APIProximityAlertTriggered;
	boost_added?: APIChatBoostAdded;
	chat_background_set?: APIChatBackground;
	checklist_tasks_done?: APIChecklistTasksDone;
	checklist_tasks_added?: APIChecklistTasksAdded;
	direct_message_price_changed: APIDirectMessagePriceChanged;
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

export interface APIMessageOriginUser {
	type: MessageOriginType.User;
	date: number;
	sender_user: APIUser;
}

export interface APIMessageOriginHiddenUser {
	type: MessageOriginType.HiddenUser;
	date: number;
	sender_user_name: string;
}

export interface APIMessageOriginChat {
	type: MessageOriginType.Chat;
	date: number;
	sender_chat: APIChat;
	author_signature?: string;
}

export interface APIMessageOriginChannel {
	type: MessageOriginType.Channel;
	date: number;
	chat: APIChat;
	message_id: number;
	author_signature?: string;
}

export type APIMessageOrigin =
	| APIMessageOriginUser
	| APIMessageOriginHiddenUser
	| APIMessageOriginChat
	| APIMessageOriginChannel;

export interface APIExternalReplyInfo {
	origin: APIMessageOrigin;
	chat?: APIChat;
	message_id?: number;
	link_preview_options?: APILinkPreviewOptions;
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	live_photo?: APILivePhoto;
	paid_media?: APIPaidMedia;
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

export interface APITextQuote {
	text: string;
	entities?: APIMessageEntity[];
	position: number;
	is_manual?: true;
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

export interface APIMessageEntity {
	type: MessageEntityType;
	offset: number;
	length: number;
	url?: string;
	user?: APIUser;
	language?: string;
	custom_emoji_id?: string;
	unix_time?: number;
	date_time_format?: string;
}

export interface APILinkPreviewOptions {
	is_disabled?: true;
	url?: string;
	prefer_small_media?: true;
	prefer_large_media?: true;
	show_above_text?: true;
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
	others_can_add_tasks?: true;
	others_can_mark_tasks_as_done?: true;
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

export interface APIGame {
	title: string;
	description: string;
	photo: APIPhotoSize[];
	text?: string;
	text_entities?: APIMessageEntity[];
	animation?: APIAnimation;
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

export interface APIPollMedia {
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
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
	options: APIPollOption;
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

export interface APILocation {
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
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
	photo?: APIPhotoSize;
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
	is_premium?: true;
	has_colors?: true;
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
	is_upgrade_separate?: true;
	can_be_upgraded?: true;
	text?: string;
	entities?: APIMessageEntity[];
	is_private?: true;
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
	rarity: UniqueGiftModelRarity;
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
	is_premium?: true;
	is_burned?: true;
	is_from_blockchain?: true;
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
	from_request?: true;
	web_app_name?: string;
	from_attachment_menu?: true;
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
	is_blurred?: true;
	is_moving?: true;
}

export interface APIBackgroundTypePattern {
	type: BackgroundTypeType.Pattern;
	document: APIDocument;
	fill: APIBackgroundFill;
	intensity: number;
	is_inverted?: true;
	is_moving?: true;
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
	is_name_implicit?: true;
}

export interface APIForumTopicEdited {}

export interface APIForumTopicClosed {
	name?: string;
	icon_custom_emoji_id?: string;
}

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
	only_new_members?: true;
	has_public_winners?: true;
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
	only_new_members?: true;
	was_refunded?: true;
	prize_description?: string;
}

export interface APIGiveawayCompleted {
	winner_count: number;
	unclaimed_prize_count?: number;
	giveaway_message?: APIMessage;
	is_star_giveaway?: true;
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

export enum InlineKeyboardButtonStyle {
	Danger = 'danger',
	Success = 'success',
	Primary = 'primary',
}

export interface APIWebAppInfo {
	url: string;
}

export interface APILoginURL {
	url: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: true;
}

export interface APISwitchInlineQueryChosenChat {
	query?: string;
	allow_user_chats?: true;
	allow_bot_chats?: true;
	allow_group_chats?: true;
	allow_channel_chats?: true;
}

export interface APICopyTextButton {
	text: string;
}

export interface APICallbackGame {}

export interface APIInlineKeyboardButton {
	text: string;
	icon_custom_emoji_id?: string;
	style?: InlineKeyboardButtonStyle;
	url?: string;
	callback_data?: string;
	web_app?: APIWebAppInfo;
	login_url?: APILoginURL;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	switch_inline_query_chosen_chat?: APISwitchInlineQueryChosenChat;
	copy_text?: APICopyTextButton;
	callback_game?: APICallbackGame;
	pay?: true;
}

export interface APIInlineKeyboardMarkup {
	inline_keyboard: APIInlineKeyboardButton[][];
}

export interface APIInaccessibleMessage extends APIMessageId {
	chat: APIChat;
	date: 0;
}

export type APIMaybeInaccessibleMessage = APIMessage | APIInaccessibleMessage;
