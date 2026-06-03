import { APIChat, APIReactionType } from './chat.js';
import { APILocation, APIMaybeInaccessibleMessage, APIMessage, APIPoll } from './message.js';
import { APIUser } from './user.js';

export enum UpdateName {
	Message = 'message',
	EditedMessage = 'edited_message',
	ChannelPost = 'channel_post',
	edited_channel_post = 'edited_channel_post',
	BusinessConnection = 'business_connection',
	BusinessMessage = 'business_message',
	EditedBusinessMessage = 'edited_business_message',
	DeletedBusinessMessages = 'deleted_business_messages',
	GuestMessage = 'guest_message',
	MessageReaction = 'message_reaction',
	MessageReactionCount = 'message_reaction_count',
	InlineQuery = 'inline_query',
	ChosenInlineResult = 'chosen_inline_result',
	CallbackQuery = 'callback_query',
	ShippingQuery = 'shipping_query',
	PreCheckoutQuery = 'pre_checkout_query',
	PurchasedPaidMedia = 'purchased_paid_media',
	Poll = 'poll',
	PollAnswer = 'poll_answer',
	MyChatMember = 'my_chat_member',
	ChatMember = 'chat_member',
	ChatJoinRequest = 'chat_join_request',
	ChatBoost = 'chat_boost',
	RemovedChatBoost = 'removed_chat_boost',
	ManagedBot = 'managed_bot',
}

interface UpdateBase {
	update_id: number;
}

export interface APIMessageUpdate extends UpdateBase {
	message: APIMessage;
}

export interface APIEditedMessageUpdate extends UpdateBase {
	edited_message: APIMessage;
}

export interface APIChannelPostUpdate extends UpdateBase {
	channel_post: APIMessage;
}

export interface APIEditedChannelPostUpdate extends UpdateBase {
	edited_channel_post: APIMessage;
}

export interface APIBusinessConnectionUpdate extends UpdateBase {
	business_connection: APIBusinessConnection;
}

export interface APIBusinessMessageUpdate extends UpdateBase {
	business_message: APIMessage;
}

export interface APIEditedBusinessMessageUpdate extends UpdateBase {
	edited_business_message: APIMessage;
}

export interface APIDeletedBusinessMessagesUpdate extends UpdateBase {
	deleted_business_messages: APIBusinessMessagesDeleted;
}

export interface APIGuestMessageUpdate extends UpdateBase {
	guest_message: APIMessage;
}

export interface APIMessageReactionUpdate extends UpdateBase {
	message_reaction: APIMessageReactionUpdated;
}

export interface APIMessageReactionCountUpdate extends UpdateBase {
	message_reaction_count: APIMessageReactionCountUpdated;
}

export interface APIInlineQueryUpdate extends UpdateBase {
	inline_query: APIInlineQuery;
}

export interface APIChosenInlineResultUpdate extends UpdateBase {
	chosen_inline_result: APIChosenInlineResult;
}

export interface APICallbackQueryUpdate extends UpdateBase {
	callback_query: APICallbackQuery;
}

export interface APIShippingQueryUpdate extends UpdateBase {
	shipping_query: APIShippingQuery;
}

export interface APIPreCheckoutQueryUpdate extends UpdateBase {
	pre_checkout_query: APIPreCheckoutQuery;
}

export interface APIPurchasedPaidMediaUpdate extends UpdateBase {
	purchased_paid_media: APIPaidMediaPurchased;
}

export interface APIPollUpdate extends UpdateBase {
	poll: APIPoll;
}

export interface APIPollAnswerUpdate extends UpdateBase {
	poll_answer: APIPollAnswer;
}

export interface APIMyChatMemberUpdate extends UpdateBase {
	my_chat_member: APIChatMemberUpdated;
}

export interface APIChatMemberUpdate extends UpdateBase {
	chat_member: APIChatMemberUpdated;
}

export interface APIChatJoinRequestUpdate extends UpdateBase {
	chat_join_request: APIChatJoinRequest;
}

export interface APIChatBoostUpdate extends UpdateBase {
	chat_boost: APIChatBoostUpdated;
}

export interface APIRemovedChatBoostUpdate extends UpdateBase {
	removed_chat_boost: APIChatBoostRemoved;
}

export interface APIManagedBotUpdate extends UpdateBase {
	managed_bot: APIManagedBotUpdated;
}

export type APIUpdate =
	| UpdateBase
	| APIMessageUpdate
	| APIEditedMessageUpdate
	| APIChannelPostUpdate
	| APIEditedChannelPostUpdate
	| APIBusinessConnectionUpdate
	| APIBusinessMessageUpdate
	| APIEditedBusinessMessageUpdate
	| APIDeletedBusinessMessagesUpdate
	| APIGuestMessageUpdate
	| APIMessageReactionUpdate
	| APIMessageReactionCountUpdate
	| APIInlineQueryUpdate
	| APIChosenInlineResultUpdate
	| APICallbackQueryUpdate
	| APIShippingQueryUpdate
	| APIPreCheckoutQueryUpdate
	| APIPurchasedPaidMediaUpdate
	| APIPollUpdate
	| APIPollAnswerUpdate
	| APIMyChatMemberUpdate
	| APIChatMemberUpdate
	| APIChatJoinRequestUpdate
	| APIChatBoostUpdate
	| APIRemovedChatBoostUpdate
	| APIManagedBotUpdate;

export function isMessageUpdate(update: APIUpdate): update is APIMessageUpdate {
	return 'message' in update;
}

export function isEditedMessageUpdate(update: APIUpdate): update is APIEditedMessageUpdate {
	return 'edited_message' in update;
}

export function isChannelPostUpdate(update: APIUpdate): update is APIChannelPostUpdate {
	return 'channel_post' in update;
}

export function isEditedChannelPostUpdate(update: APIUpdate): update is APIEditedChannelPostUpdate {
	return 'edited_channel_post' in update;
}

export function isBusinessConnectionUpdate(update: APIUpdate): update is APIBusinessConnectionUpdate {
	return 'business_connection' in update;
}

export function isBusinessMessageUpdate(update: APIUpdate): update is APIBusinessMessageUpdate {
	return 'business_message' in update;
}

export function isEditedBusinessMessageUpdate(update: APIUpdate): update is APIEditedBusinessMessageUpdate {
	return 'edited_business_message' in update;
}

export function isDeletedBusinessMessagesUpdate(update: APIUpdate): update is APIDeletedBusinessMessagesUpdate {
	return 'deleted_business_messages' in update;
}

export function isGuestMessageUpdate(update: APIUpdate): update is APIGuestMessageUpdate {
	return 'guest_message' in update;
}

export function isMessageReactionUpdate(update: APIUpdate): update is APIMessageReactionUpdate {
	return 'message_reaction' in update;
}

export function isMessageReactionCountUpdate(update: APIUpdate): update is APIMessageReactionCountUpdate {
	return 'message_reaction_count' in update;
}

export function isInlineQueryUpdate(update: APIUpdate): update is APIInlineQueryUpdate {
	return 'inline_query' in update;
}

export function isChosenInlineResult(update: APIUpdate): update is APIChosenInlineResultUpdate {
	return 'chosen_inline_result' in update;
}

export function isCallbackQueryUpdate(update: APIUpdate): update is APICallbackQueryUpdate {
	return 'callback_query' in update;
}

export function isShippingQueryUpdate(update: APIUpdate): update is APIShippingQueryUpdate {
	return 'shipping_query' in update;
}

export function isPreCheckoutQueryUpdate(update: APIUpdate): update is APIPreCheckoutQueryUpdate {
	return 'pre_checkout_query' in update;
}

export function isPurchasedPaidMediaUpdate(update: APIUpdate): update is APIPurchasedPaidMediaUpdate {
	return 'purchased_paid_media' in update;
}

export function isPollUpdate(update: APIUpdate): update is APIPollUpdate {
	return 'poll' in update;
}

export function isPollAnswerUpdate(update: APIUpdate): update is APIPollAnswerUpdate {
	return 'poll_answer' in update;
}

export function isMyChatMemberUpdate(update: APIUpdate): update is APIMyChatMemberUpdate {
	return 'my_chat_member' in update;
}

export function isChatMemberUpdate(update: APIUpdate): update is APIChatMemberUpdate {
	return 'chat_member' in update;
}

export function isChatJoinRequestUpdate(update: APIUpdate): update is APIChatJoinRequestUpdate {
	return 'chat_join_request' in update;
}

export function isChatBoostUpdate(update: APIUpdate): update is APIChatBoostUpdate {
	return 'chat_boost' in update;
}

export function isRemovedChatBoostUpdate(update: APIUpdate): update is APIRemovedChatBoostUpdate {
	return 'removed_chat_boost' in update;
}

export function isManagedBotUpdate(update: APIUpdate): update is APIManagedBotUpdate {
	return 'managed_bot' in update;
}

export interface APIBusinessBotRights {
	can_reply?: boolean;
	can_read_messages?: boolean;
	can_delete_sent_messages?: boolean;
	can_delete_all_messages?: boolean;
	can_edit_name?: boolean;
	can_edit_bio?: boolean;
	can_edit_profile_photo?: boolean;
	can_edit_username?: boolean;
	can_change_gift_settings?: boolean;
	can_view_gifts_and_stars?: boolean;
	can_convert_gifts_to_stars?: boolean;
	can_transfer_and_upgrade_gifts?: boolean;
	can_transfer_stars?: boolean;
	can_manage_stories?: boolean;
}

export interface APIBusinessConnection {
	id: string;
	user: APIUser;
	user_chat_id: number;
	date: number;
	rights?: APIBusinessBotRights;
	is_enabled: boolean;
}

export interface APIBusinessMessagesDeleted {
	business_connection_id: string;
	chat: APIChat;
	message_ids: number[];
}

export interface APIMessageReactionUpdated {
	chat: APIChat;
	message_id: number;
	user?: APIUser;
	actor_chat?: APIChat;
	date: number;
	old_reaction: APIReactionType[];
	new_reaction: APIReactionType[];
}

export interface APIReactionCount {
	type: APIReactionType;
	total_count: number;
}

export interface APIMessageReactionCountUpdated {
	chat: APIChat;
	message_id: number;
	date: number;
	reactions: APIReactionCount[];
}

export enum InlineQueryChatType {
	Sender = 'sender',
	Private = 'private',
	Group = 'group',
	Supergroup = 'supergroup',
	Channel = 'channel',
}

export interface APIInlineQuery {
	id: string;
	from: APIUser;
	query: string;
	offset: string;
	chat_type: InlineQueryChatType;
	location?: APILocation;
}

export interface APIChosenInlineResult {
	result_id: string;
	from: APIUser;
	location?: APILocation;
	inline_message_id?: string;
	query: string;
}

export interface APICallbackQuery {
	id: string;
	from: APIUser;
	message?: APIMaybeInaccessibleMessage;
	inline_message_id?: string;
	chat_instance: string;
	data?: string;
	game_short_name?: string;
}

export interface APIShippingAddress {
	country_code: string;
	state: string;
	city: string;
	street_line1: string;
	street_line2: string;
	post_code: string;
}
export interface APIShippingQuery {
	id: string;
	from: APIUser;
	invoice_payload: string;
	shipping_address: APIShippingAddress;
}

export interface APIOrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: APIShippingAddress;
}

export interface APIPreCheckoutQuery {
	id: string;
	from: APIUser;
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: APIOrderInfo;
}

export interface APIPaidMediaPurchased {
	from: APIUser;
	paid_media_payload: string;
}

export interface APIPollAnswer {
	poll_id: string;
	voter_chat?: APIChat;
	user?: APIUser;
	option_ids: number[];
	option_persistent_ids: string[];
}

export enum ChatMemberStatus {
	Creator = 'creator',
	Administrator = 'administrator',
	Member = 'member',
	Restricted = 'restricted',
	Left = 'left',
	Kicked = 'kicked',
}

interface ChatMemberBase<Status extends ChatMemberStatus> {
	status: Status;
	user: APIUser;
}

export interface APIChatMemberOwner extends ChatMemberBase<ChatMemberStatus.Creator> {
	is_anonymous: boolean;
	custom_title?: string;
}

export interface APIChatMemberAdministrator extends ChatMemberBase<ChatMemberStatus.Administrator> {
	can_be_edited: boolean;
	is_anonymous: boolean;
	can_manage_chat: boolean;
	can_delete_messages: boolean;
	can_manage_video_chats: boolean;
	can_restrict_members: boolean;
	can_promote_members: boolean;
	can_change_info: boolean;
	can_invite_users: boolean;
	can_post_stories: boolean;
	can_edit_stories: boolean;
	can_delete_stories: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_pin_messages?: boolean;
	can_manage_topics?: boolean;
	can_manage_direct_messages?: boolean;
	can_manage_tags?: boolean;
	custom_title?: string;
}

export interface APIChatMemberMember extends ChatMemberBase<ChatMemberStatus.Member> {
	tag?: string;
	until_date?: number;
}

export interface APIChatMemberRestricted extends ChatMemberBase<ChatMemberStatus.Restricted> {
	tag?: string;
	is_member: boolean;
	can_send_messages: boolean;
	can_send_audios: boolean;
	can_send_documents: boolean;
	can_send_photos: boolean;
	can_send_videos: boolean;
	can_send_video_notes: boolean;
	can_send_voice_notes: boolean;
	can_send_polls: boolean;
	can_send_other_messages: boolean;
	can_add_web_page_previews: boolean;
	can_react_to_messages: boolean;
	can_edit_tag: boolean;
	can_change_info: boolean;
	can_invite_users: boolean;
	can_pin_messages: boolean;
	can_manage_topics: boolean;
	until_date: number;
}

export interface APIChatMemberLeft extends ChatMemberBase<ChatMemberStatus.Left> {}

export interface APIChatMemberBanned extends ChatMemberBase<ChatMemberStatus.Kicked> {
	until_date: number;
}

export type APIChatMember =
	| APIChatMemberOwner
	| APIChatMemberAdministrator
	| APIChatMemberMember
	| APIChatMemberRestricted
	| APIChatMemberLeft
	| APIChatMemberBanned;

export interface APIChatInviteLink {
	invite_link: string;
	creator: APIUser;
	creates_join_request: boolean;
	is_primary: boolean;
	is_revoked: boolean;
	name?: string;
	expire_date?: number;
	member_limit?: number;
	pending_join_request_count?: number;
	subscription_period?: number;
	subscription_price?: number;
}

export interface APIChatMemberUpdated {
	chat: APIChat;
	from: APIUser;
	date: number;
	old_chat_member: APIChatMember;
	new_chat_member: APIChatMember;
	invite_link?: APIChatInviteLink;
	via_join_request?: boolean;
	via_chat_folder_invite_link?: boolean;
}

export interface APIChatJoinRequest {
	chat: APIChat;
	from: APIUser;
	user_chat_id: number;
	date: number;
	bio?: string;
	invite_link?: APIChatInviteLink;
}

export enum ChatBoostSourceSource {
	Premium = 'premium',
	GiftCode = 'gift_code',
	Giveaway = 'giveaway',
}

interface ChatBoostSourceBase<Source extends ChatBoostSourceSource> {
	source: Source;
}

export interface APIChatBoostSourcePremium extends ChatBoostSourceBase<ChatBoostSourceSource.Premium> {
	user: APIUser;
}

export interface APIChatBoostSourceGiftCode extends ChatBoostSourceBase<ChatBoostSourceSource.GiftCode> {
	user: APIUser;
}

export interface APIChatBoostSourceGiveaway extends ChatBoostSourceBase<ChatBoostSourceSource.Giveaway> {
	giveaway_message_id: number;
	user?: APIUser;
	prize_star_count?: number;
	is_unclaimed?: boolean;
}

export type APIChatBoostSource = APIChatBoostSourcePremium | APIChatBoostSourceGiftCode | APIChatBoostSourceGiveaway;

export interface APIChatBoost {
	boost_id: string;
	add_date: number;
	expiration_date: number;
	source: APIChatBoostSource;
}

export interface APIChatBoostUpdated {
	chat: APIChat;
	boost: APIChatBoost;
}

export interface APIChatBoostRemoved {
	chat: APIChat;
	boost_id: string;
	remove_date: number;
	source: APIChatBoostSource;
}

export interface APIManagedBotUpdated {
	user: APIUser;
	bot: APIUser;
}
