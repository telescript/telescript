import { APIChatPermissions } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ChatPermissions extends Structure<APIChatPermissions> {
	public get canSendMessages() {
		return this[Structure.DataProperty].can_send_messages ?? false;
	}

	public get canSendAudios() {
		return this[Structure.DataProperty].can_send_audios ?? false;
	}

	public get canSendDocuments() {
		return this[Structure.DataProperty].can_send_documents ?? false;
	}

	public get canSendPhotos() {
		return this[Structure.DataProperty].can_send_photos ?? false;
	}

	public get canSendVideos() {
		return this[Structure.DataProperty].can_send_videos ?? false;
	}

	public get canSendVideoNotes() {
		return this[Structure.DataProperty].can_send_video_notes ?? false;
	}

	public get canSendVoiceNotes() {
		return this[Structure.DataProperty].can_send_voice_notes ?? false;
	}

	public get canSendPolls() {
		return this[Structure.DataProperty].can_send_polls ?? false;
	}

	public get canSendOtherMessages() {
		return this[Structure.DataProperty].can_send_other_messages ?? false;
	}

	public get canAddWebPagePreviews() {
		return this[Structure.DataProperty].can_add_web_page_previews ?? false;
	}

	public get canReactToMessages() {
		return this[Structure.DataProperty].can_react_to_messages ?? false;
	}

	public get canEditTag() {
		return this[Structure.DataProperty].can_edit_tag ?? false;
	}

	public get canChangeInfo() {
		return this[Structure.DataProperty].can_change_info ?? false;
	}

	public get canInviteUsers() {
		return this[Structure.DataProperty].can_invite_users ?? false;
	}

	public get canPinMessages() {
		return this[Structure.DataProperty].can_pin_messages ?? false;
	}

	public get canManageTopics() {
		return this[Structure.DataProperty].can_manage_topics ?? false;
	}
}
