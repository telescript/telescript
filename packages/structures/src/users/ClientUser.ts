import { APIMethod } from '@telescript/api-types';
import { BaseUser } from './BaseUser.js';
import { Structure } from '../Structure.js';

export class ClientUser extends BaseUser<APIMethod.GetMe.Result> {
	public get isBot() {
		return this[Structure.DataProperty].is_bot;
	}

	public get username() {
		return this[Structure.DataProperty].username;
	}

	public get canJoinGroups() {
		return this[Structure.DataProperty].can_join_groups;
	}

	public get canReadAllGroupMessages() {
		return this[Structure.DataProperty].can_read_all_group_messages;
	}

	public get supportsGuestQueries() {
		return this[Structure.DataProperty].supports_guest_queries;
	}

	public get supportsInlineQueries() {
		return this[Structure.DataProperty].supports_inline_queries;
	}

	public get canConnectToBusiness() {
		return this[Structure.DataProperty].can_connect_to_business;
	}

	public get hasMainWebApp() {
		return this[Structure.DataProperty].has_main_web_app;
	}

	public get hasTopicsEnabled() {
		return this[Structure.DataProperty].has_topics_enabled;
	}

	public get allowsUsersToCreateTopics() {
		return this[Structure.DataProperty].allows_users_to_create_topics;
	}

	public get canManageBots() {
		return this[Structure.DataProperty].can_manage_bots;
	}
}
