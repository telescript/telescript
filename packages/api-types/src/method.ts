import { User } from './user.js';

export enum Method {
	GetMe = 'getMe',
}

export namespace Method {
	export namespace GetMe {
		export interface Result extends User {
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
}
