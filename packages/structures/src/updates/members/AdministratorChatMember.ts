import type { Resolve } from '../../registry.js';
import { APIChatMemberAdministrator, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatMember } from './BaseChatMember.js';

export class AdministratorChatMember extends BaseChatMember<
	ChatMemberStatus.Administrator,
	APIChatMemberAdministrator
> {
	public isAdministrator(): this is Resolve<'AdministratorChatMember'> {
		return true;
	}

	public get canBeEdited() {
		return this[Structure.DataProperty].can_be_edited;
	}

	public get isAnonymous() {
		return this[Structure.DataProperty].is_anonymous;
	}

	public get canManageChat() {
		return this[Structure.DataProperty].can_manage_chat;
	}

	public get canDeleteMessages() {
		return this[Structure.DataProperty].can_delete_messages;
	}

	public get canManageVideoChats() {
		return this[Structure.DataProperty].can_manage_video_chats;
	}

	public get canRestrictMembers() {
		return this[Structure.DataProperty].can_restrict_members;
	}

	public get canPromoteMembers() {
		return this[Structure.DataProperty].can_promote_members;
	}

	public get canChangeInfo() {
		return this[Structure.DataProperty].can_change_info;
	}

	public get canInviteUsers() {
		return this[Structure.DataProperty].can_invite_users;
	}

	public get canPostStories() {
		return this[Structure.DataProperty].can_post_stories;
	}

	public get canEditStories() {
		return this[Structure.DataProperty].can_edit_stories;
	}

	public get canDeleteStories() {
		return this[Structure.DataProperty].can_delete_stories;
	}

	public get canPostMessages() {
		return this[Structure.DataProperty].can_post_messages ?? false;
	}

	public get canEditMessages() {
		return this[Structure.DataProperty].can_edit_messages ?? false;
	}

	public get canPinMessages() {
		return this[Structure.DataProperty].can_pin_messages ?? false;
	}

	public get canManageTopics() {
		return this[Structure.DataProperty].can_manage_topics ?? false;
	}

	public get canManageDirectMessages() {
		return this[Structure.DataProperty].can_manage_direct_messages ?? false;
	}

	public get canManageTags() {
		return this[Structure.DataProperty].can_manage_tags ?? false;
	}

	public get customTitle() {
		return this[Structure.DataProperty].custom_title ?? null;
	}
}
