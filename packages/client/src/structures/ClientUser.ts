import { APIMethod } from '@telescript/api-types';
import { User } from './User.js';
import { Structure } from './Structure.js';

export class ClientUser extends Structure<APIMethod.GetMe.Result> implements User {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get isBot() {
		return this[Structure.DataProperty].is_bot;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get languageCode() {
		return this[Structure.DataProperty].language_code ?? null;
	}

	public get isPremium() {
		return this[Structure.DataProperty].is_premium ?? false;
	}

	public get addedToAttachmentMenu() {
		return this[Structure.DataProperty].added_to_attachment_menu ?? false;
	}

	public get canJoinGroups() {
		return this[Structure.DataProperty].can_join_groups ?? false;
	}

	public get canReadAllGroupMessages() {
		return this[Structure.DataProperty].can_read_all_group_messages ?? false;
	}

	public get supportsGuestQueries() {
		return this[Structure.DataProperty].supports_guest_queries ?? false;
	}

	public get supportsInlineQueries() {
		return this[Structure.DataProperty].supports_inline_queries ?? false;
	}

	public get canConnectToBusiness() {
		return this[Structure.DataProperty].can_connect_to_business ?? false;
	}

	public get hasMainWebApp() {
		return this[Structure.DataProperty].has_main_web_app ?? false;
	}

	public get hasTopicsEnabled() {
		return this[Structure.DataProperty].has_topics_enabled ?? false;
	}

	public get allowsUsersToCreateTopics() {
		return this[Structure.DataProperty].allows_users_to_create_topics ?? false;
	}

	public get canManageBots() {
		return this[Structure.DataProperty].can_manage_bots ?? false;
	}
}
