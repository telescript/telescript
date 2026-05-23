import { APIAudio } from './media.js';
import { APIMessage } from './message.js';

export enum ChatType {
	Private = 'private',
	Group = 'group',
	Supergroup = 'supergroup',
	Channel = 'channel',
}

export interface APIChat {
	id: number;
	type: ChatType;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	is_forum?: true;
	is_direct_messages?: true;
}

export interface APIChatFullInfo {
	id: number;
	type: ChatType;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	is_forum?: true;
	is_direct_messages?: true;
	accent_color_id: number;
	max_reaction_count: number;
	photo?: APIChatPhoto;
	active_usernames?: string[];
	birthdate?: APIBirthdate;
	business_intro?: APIBusinessIntro;
	business_location?: APIBusinessLocation;
	business_opening_hours?: APIBusinessOpeningHours;
	personal_chat?: APIChat;
	parent_chat?: APIChat;
	available_reactions?: APIReactionType[];
	background_custom_emoji_id?: string;
	profile_accent_color_id?: number;
	profile_background_custom_emoji_id?: string;
	emoji_status_custom_emoji_id?: string;
	emoji_status_expiration_date?: number;
	bio?: string;
	has_private_forwards?: true;
	has_restricted_voice_and_video_messages?: true;
	join_to_send_messages?: true;
	join_by_request?: true;
	description?: string;
	invite_link?: string;
	pinned_message?: APIMessage;
	permissions?: APIChatPermissions;
	accepted_gift_types?: APIAcceptedGiftTypes;
	can_send_paid_media?: true;
	slow_mode_delay?: number;
	unrestrict_boost_count?: number;
	message_auto_delete_time?: number;
	has_aggressive_anti_spam_enabled?: true;
	has_hidden_members?: true;
	has_protected_content?: true;
	has_visible_history?: true;
	sticker_set_name?: string;
	can_set_sticker_set?: true;
	custom_emoji_sticker_set_name?: string;
	linked_chat_id?: number;
	location?: APIChatLocation;
	rating?: APIUserRating;
	first_profile_audio?: APIAudio;
	unique_gift_colors?: APIUniqueGiftColors;
	paid_message_star_count?: number;
}

export interface APIChatPhoto {}

export interface APIBirthdate {}

export interface APIBusinessIntro {}

export interface APIBusinessLocation {}

export interface APIBusinessOpeningHours {}

export enum APIReactionType {}

export interface APIChatPermissions {}

export enum APIAcceptedGiftTypes {}

export interface APIChatLocation {}

export interface APIUserRating {}

export interface APIUniqueGiftColors {}
