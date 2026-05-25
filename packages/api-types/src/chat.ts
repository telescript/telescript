import { APIAudio, APISticker } from './media.js';
import { APILocation, APIMessage, APIUniqueGiftColors } from './message.js';

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
	is_forum?: boolean;
	is_direct_messages?: boolean;
}

export interface APIChatFullInfo extends APIChat {
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
	has_private_forwards?: boolean;
	has_restricted_voice_and_video_messages?: boolean;
	join_to_send_messages?: boolean;
	join_by_request?: boolean;
	description?: string;
	invite_link?: string;
	pinned_message?: APIMessage;
	permissions?: APIChatPermissions;
	accepted_gift_types?: APIAcceptedGiftTypes;
	can_send_paid_media?: boolean;
	slow_mode_delay?: number;
	unrestrict_boost_count?: number;
	message_auto_delete_time?: number;
	has_aggressive_anti_spam_enabled?: boolean;
	has_hidden_members?: boolean;
	has_protected_content?: boolean;
	has_visible_history?: boolean;
	sticker_set_name?: string;
	can_set_sticker_set?: boolean;
	custom_emoji_sticker_set_name?: string;
	linked_chat_id?: number;
	location?: APIChatLocation;
	rating?: APIUserRating;
	first_profile_audio?: APIAudio;
	unique_gift_colors?: APIUniqueGiftColors;
	paid_message_star_count?: number;
}

export interface APIChatPhoto {
	small_file_id: string;
	small_file_unique_id: string;
	big_file_id: string;
	big_file_unique_id: string;
}

export interface APIBirthdate {
	day: number;
	month: number;
	year?: number;
}

export interface APIBusinessIntro {
	title?: string;
	message?: string;
	sticker?: APISticker;
}

export interface APIBusinessLocation {
	address: string;
	location?: APILocation;
}

export interface APIBusinessOpeningHoursInterval {
	opening_minute: number;
	closing_minute: number;
}

export interface APIBusinessOpeningHours {
	time_zone_name: string;
	opening_hours: APIBusinessOpeningHoursInterval[];
}

export enum ReactionTypeType {
	Emoji = 'emoji',
	CustomEmoji = 'custom_emoji',
	Paid = 'paid',
}

export interface APIReactionTypeEmoji {
	type: ReactionTypeType.Emoji;
	emoji: string;
}

export interface APIReactionTypeCustomEmoji {
	type: ReactionTypeType.CustomEmoji;
	custom_emoji_id: string;
}

export interface APIReactionTypePaid {
	type: ReactionTypeType.Paid;
}

export type APIReactionType = APIReactionTypeEmoji | APIReactionTypeCustomEmoji | APIReactionTypePaid;

export interface APIChatPermissions {
	can_send_messages?: boolean;
	can_send_audios?: boolean;
	can_send_documents?: boolean;
	can_send_photos?: boolean;
	can_send_videos?: boolean;
	can_send_video_notes?: boolean;
	can_send_voice_notes?: boolean;
	can_send_polls?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
	can_react_to_messages?: boolean;
	can_edit_tag?: boolean;
	can_change_info?: boolean;
	can_invite_users?: boolean;
	can_pin_messages?: boolean;
	can_manage_topics?: boolean;
}

export interface APIAcceptedGiftTypes {
	unlimited_gifts?: boolean;
	limited_gifts?: boolean;
	unique_gifts?: boolean;
	premium_subscription?: boolean;
	gifts_from_channels?: boolean;
}

export interface APIChatLocation {
	location: APILocation;
	address: string;
}

export interface APIUserRating {
	level: number;
	rating: number;
	current_level_rating: number;
	next_level_rating?: number;
}
