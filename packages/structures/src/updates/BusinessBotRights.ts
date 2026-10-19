import { APIBusinessBotRights } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BusinessBotRights extends Structure<APIBusinessBotRights> {
	public get canReply() {
		return this[Structure.DataProperty].can_reply ?? false;
	}

	public get canReadMessages() {
		return this[Structure.DataProperty].can_read_messages ?? false;
	}

	public get canDeleteSentMessages() {
		return this[Structure.DataProperty].can_delete_sent_messages ?? false;
	}

	public get canDeleteAllMessages() {
		return this[Structure.DataProperty].can_delete_all_messages ?? false;
	}

	public get canEditName() {
		return this[Structure.DataProperty].can_edit_name ?? false;
	}

	public get canEditBio() {
		return this[Structure.DataProperty].can_edit_bio ?? false;
	}

	public get canEditProfilePhoto() {
		return this[Structure.DataProperty].can_edit_profile_photo ?? false;
	}

	public get canEditUsername() {
		return this[Structure.DataProperty].can_edit_username ?? false;
	}

	public get canChangeGiftSettings() {
		return this[Structure.DataProperty].can_change_gift_settings ?? false;
	}

	public get canViewGiftsAndStars() {
		return this[Structure.DataProperty].can_view_gifts_and_stars ?? false;
	}

	public get canConvertGiftsToStars() {
		return this[Structure.DataProperty].can_convert_gifts_to_stars ?? false;
	}

	public get canTransferAndUpgradeGifts() {
		return this[Structure.DataProperty].can_transfer_and_upgrade_gifts ?? false;
	}

	public get canTransferStars() {
		return this[Structure.DataProperty].can_transfer_stars ?? false;
	}

	public get canManageStories() {
		return this[Structure.DataProperty].can_manage_stories ?? false;
	}
}
