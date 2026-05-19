import { APIMessage } from './message.js';
import { APIUpdate } from './update.js';
import { APIUser } from './user.js';

export enum APIMethod {
	GetUpdates = 'getUpdates',
	GetMe = 'getMe',
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
			can_join_groups?: true;
			can_read_all_group_messages?: true;
			supports_guest_queries?: true;
			supports_inline_queries?: true;
			can_connect_to_business?: true;
			has_main_web_app?: true;
			has_topics_enabled?: true;
			allows_users_to_create_topics?: true;
			can_manage_bots?: true;
		}
	}

	export namespace SendMessage {
		export interface Params {
			chat_id: number | string;
			text: string;
		}

		export type Result = APIMessage;
	}
}
