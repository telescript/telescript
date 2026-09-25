import { APIChatAdministratorRights } from './chat.js';
import { APICallbackGame } from './game.js';
import { PollType } from './poll.js';

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
	force_reply?: boolean;
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
	max_quantity?: boolean;
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
	type?: PollType;
}

export interface APIReplyKeyboardRemove {
	remove_keyboard: boolean;
	selective?: boolean;
}

export interface APIForceReply {
	force_reply: boolean;
	input_field_placeholder?: string;
	selective?: boolean;
}

export interface APIInlineKeyboardMarkup {
	inline_keyboard: APIInlineKeyboardButton[][];
	force_reply?: boolean;
}

export enum InlineKeyboardButtonStyle {
	Danger = 'danger',
	Success = 'success',
	Primary = 'primary',
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
	disabled?: APIDisabledButton;
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

export interface APIDisabledButton {}
