import { APICallbackGame } from './games.js';

export interface APIPreparedInlineMessage {
	id: string;
	expiration_date: number;
}

export interface APIPreparedKeyboardButton {
	id: string;
}

export interface APIChatAdministratorRights {
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
}

export interface APIWebAppInfo {
	url: string;
}

export interface APIReplyKeyboardMarkup {
	keyboard: APIKeyboardButton[][];
	is_persistent?: boolean;
	resize_keyboard?: boolean;
	one_time_keyboard?: boolean;
	input_field_placeholder?: string;
	selective?: boolean;
}

export enum KeyboardButtonStyle {
	Danger = 'danger',
	Success = 'success',
	Primary = 'primary',
}

export interface APIKeyboardButton {
	text: string;
	icon_custom_emoji_id?: string;
	style?: KeyboardButtonStyle;
	request_users?: APIKeyboardButtonRequestUsers;
	request_chat?: APIKeyboardButtonRequestChat;
	request_managed_bot?: APIKeyboardButtonRequestManagedBot;
	request_contact?: boolean;
	request_location?: boolean;
	request_poll?: APIKeyboardButtonPollType;
	web_app?: APIWebAppInfo;
}

export interface APIKeyboardButtonRequestUsers {
	request_id: number;
	user_is_bot?: boolean;
	user_is_premium?: boolean;
	max_quantity?: number;
	request_name?: boolean;
	request_username?: boolean;
	request_photo?: boolean;
}

export interface APIKeyboardButtonRequestChat {
	request_id: number;
	chat_is_channel: boolean;
	chat_is_forum?: boolean;
	chat_has_username?: boolean;
	chat_is_created?: boolean;
	user_administrator_rights?: APIChatAdministratorRights;
	bot_administrator_rights?: APIChatAdministratorRights;
	bot_is_member?: boolean;
	request_title?: boolean;
	request_username?: boolean;
	request_photo?: boolean;
}

export interface APIKeyboardButtonRequestManagedBot {
	request_id: number;
	suggested_name?: string;
	suggested_username?: string;
}

export interface APIKeyboardButtonPollType {
	type?: 'quiz' | 'regular';
}

export interface APIReplyKeyboardRemove {
	remove_keyboard: true;
	selective?: boolean;
}

export interface APIForceReply {
	force_reply: true;
	input_field_placeholder?: string;
	selective?: boolean;
}

export enum InlineKeyboardButtonStyle {
	Danger = 'danger',
	Success = 'success',
	Primary = 'primary',
}

export interface APILoginURL {
	url: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: boolean;
}

export interface APISwitchInlineQueryChosenChat {
	query?: string;
	allow_user_chats?: boolean;
	allow_bot_chats?: boolean;
	allow_group_chats?: boolean;
	allow_channel_chats?: boolean;
}

export interface APICopyTextButton {
	text: string;
}

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
	pay?: boolean;
}

export interface APIInlineKeyboardMarkup {
	inline_keyboard: APIInlineKeyboardButton[][];
}

export enum MenuButtonType {
	Commands = 'commands',
	WebApp = 'web_app',
	Default = 'default',
}

export type APIMenuButton = APIMenuButton.Commands | APIMenuButton.WebApp | APIMenuButton.Default;

export namespace APIMenuButton {
	export interface Base<Type extends MenuButtonType> {
		type: Type;
	}

	export interface Commands extends Base<MenuButtonType.Commands> {}

	export interface WebApp extends Base<MenuButtonType.WebApp> {
		text: string;
		web_app: APIWebAppInfo;
	}

	export interface Default extends Base<MenuButtonType.Default> {}

	export type FromType<Type extends MenuButtonType> = Extract<APIMenuButton, { type: Type }>;
}
