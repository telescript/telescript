import type { Resolve } from '../../registry.js';
import { APIChatMemberRestricted, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatMember } from './BaseChatMember.js';

export class RestrictedChatMember extends BaseChatMember<ChatMemberStatus.Restricted, APIChatMemberRestricted> {
	public isRestricted(): this is Resolve<'RestrictedChatMember'> {
		return true;
	}

	public get tag() {
		return this[Structure.DataProperty].tag ?? null;
	}

	public get stillMember() {
		return this[Structure.DataProperty].is_member;
	}

	public get canSendMessages() {
		return this[Structure.DataProperty].can_send_messages;
	}

	public get canSendAudios() {
		return this[Structure.DataProperty].can_send_audios;
	}

	public get canSendDocuments() {
		return this[Structure.DataProperty].can_send_documents;
	}

	public get canSendPhotos() {
		return this[Structure.DataProperty].can_send_photos;
	}

	public get canSendVideos() {
		return this[Structure.DataProperty].can_send_videos;
	}

	public get canSendVideoNotes() {
		return this[Structure.DataProperty].can_send_video_notes;
	}

	public get canSendVoiceNotes() {
		return this[Structure.DataProperty].can_send_voice_notes;
	}

	public get canSendPolls() {
		return this[Structure.DataProperty].can_send_polls;
	}

	public get canSendOtherMessages() {
		return this[Structure.DataProperty].can_send_other_messages;
	}

	public get canAddWebPagePreviews() {
		return this[Structure.DataProperty].can_add_web_page_previews;
	}

	public get canReactToMessages() {
		return this[Structure.DataProperty].can_react_to_messages;
	}

	public get canEditTag() {
		return this[Structure.DataProperty].can_edit_tag;
	}

	public get canChangeInfo() {
		return this[Structure.DataProperty].can_change_info;
	}

	public get canInviteUsers() {
		return this[Structure.DataProperty].can_invite_users;
	}

	public get canPinMessages() {
		return this[Structure.DataProperty].can_pin_messages;
	}

	public get canManageTopics() {
		return this[Structure.DataProperty].can_manage_topics;
	}

	public get untilUnixTimestamp() {
		return this[Structure.DataProperty].until_date;
	}

	public get untilTimestamp() {
		return this.untilUnixTimestamp * 1000;
	}

	public get untilDate() {
		return new Date(this.untilTimestamp);
	}
}
