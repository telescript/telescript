import {
	APIForceReply,
	APIInlineKeyboardMarkup,
	APILinkPreviewOptions,
	APIMessage,
	APIMessageEntity,
	APIReplyKeyboardMarkup,
	APIReplyKeyboardRemove,
	APIReplyParameters,
	APISuggestedPostParameters,
} from './message.js';
import { APIUpdate } from './update.js';
import { APIUser } from './user.js';

export enum APIMethod {
	GetUpdates = 'getUpdates',
	GetMe = 'getMe',
	LogOut = 'logOut',
	Close = 'close',
	SendMessage = 'sendMessage',
}

export namespace APIMethod {
	export namespace GetUpdates {
		export interface Params {
			offset?: number;
			limit?: number;
			timeout?: number;
			allowed_updates?: string[];
		}

		export type Result = APIUpdate[];
	}

	export namespace GetMe {
		export interface Result extends APIUser {
			is_bot: true;
			username: string;
			can_join_groups: boolean;
			can_read_all_group_messages: boolean;
			supports_guest_queries: boolean;
			supports_inline_queries: boolean;
			can_connect_to_business: boolean;
			has_main_web_app: boolean;
			has_topics_enabled: boolean;
			allows_users_to_create_topics: boolean;
			can_manage_bots: boolean;
		}
	}

	export namespace LogOut {
		export type Result = true;
	}

	export namespace Close {
		export type Result = true;
	}

	export namespace SendMessage {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			receiver_user_id?: number;
			callback_query_id?: string;
			text: string;
			parse_mode?: string;
			entities?: APIMessageEntity[];
			link_preview_options?: APILinkPreviewOptions;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}
}
