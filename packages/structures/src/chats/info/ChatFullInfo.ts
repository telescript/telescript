import { createStructure, defaultOwner, type StructureOwner, type Resolve } from '../../registry.js';
import { APIChat, APIChatFullInfo, ChatType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createReactionType } from '../../reactions/index.js';
import { createMaybeInaccessibleMessage } from '../../messages/createMaybeInaccessibleMessage.js';

function createChat(data: APIChat, owner: StructureOwner = defaultOwner) {
	switch (data.type) {
		case ChatType.Channel:
			return createStructure(owner, 'ChannelChat', data);
		case ChatType.Group:
			return createStructure(owner, 'GroupChat', data);
		case ChatType.Private:
			return createStructure(owner, 'PrivateChat', data);
		case ChatType.Supergroup:
			return createStructure(owner, 'SupergroupChat', data);
		default:
			return createStructure(owner, 'BaseChat', data);
	}
}

export class ChatFullInfo extends Structure<APIChatFullInfo> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get title() {
		return this[Structure.DataProperty].title ?? null;
	}

	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public get firstName() {
		return this[Structure.DataProperty].first_name ?? null;
	}

	public get lastName() {
		return this[Structure.DataProperty].last_name ?? null;
	}

	public get isForum() {
		return this[Structure.DataProperty].is_forum ?? false;
	}

	public get isDirectMessages() {
		return this[Structure.DataProperty].is_direct_messages ?? false;
	}

	public get accentColorId() {
		return this[Structure.DataProperty].accent_color_id;
	}

	public get maxReactionCount() {
		return this[Structure.DataProperty].max_reaction_count;
	}

	public get photo(): Resolve<'ChatPhoto'> | null {
		const data = this[Structure.DataProperty].photo;
		return data ? createStructure(this[Structure.OwnerProperty], 'ChatPhoto', data) : null;
	}

	public get activeUsernames() {
		return this[Structure.DataProperty].active_usernames ?? null;
	}

	public get birthdate(): Resolve<'Birthdate'> | null {
		const data = this[Structure.DataProperty].birthdate;
		return data ? createStructure(this[Structure.OwnerProperty], 'Birthdate', data) : null;
	}

	public get businessIntro(): Resolve<'BusinessIntro'> | null {
		const data = this[Structure.DataProperty].business_intro;
		return data ? createStructure(this[Structure.OwnerProperty], 'BusinessIntro', data) : null;
	}

	public get businessLocation(): Resolve<'BusinessLocation'> | null {
		const data = this[Structure.DataProperty].business_location;
		return data ? createStructure(this[Structure.OwnerProperty], 'BusinessLocation', data) : null;
	}

	public get businessOpeningHours(): Resolve<'BusinessOpeningHours'> | null {
		const data = this[Structure.DataProperty].business_opening_hours;
		return data ? createStructure(this[Structure.OwnerProperty], 'BusinessOpeningHours', data) : null;
	}

	public get personalChat():
		| Resolve<'PrivateChat'>
		| Resolve<'SupergroupChat'>
		| Resolve<'ChannelChat'>
		| Resolve<'GroupChat'>
		| Resolve<'BaseChat'>
		| null {
		const data = this[Structure.DataProperty].personal_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get parentChat():
		| Resolve<'PrivateChat'>
		| Resolve<'SupergroupChat'>
		| Resolve<'ChannelChat'>
		| Resolve<'GroupChat'>
		| Resolve<'BaseChat'>
		| null {
		const data = this[Structure.DataProperty].parent_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get availableReactions() {
		const data = this[Structure.DataProperty].available_reactions;
		return data ? data.map((reaction) => createReactionType(reaction, this[Structure.OwnerProperty])) : null;
	}

	public get backgroundCustomEmojiId() {
		return this[Structure.DataProperty].background_custom_emoji_id ?? null;
	}

	public get profileAccentColorId() {
		return this[Structure.DataProperty].profile_accent_color_id ?? null;
	}

	public get profileBackgroundCustomEmojiId() {
		return this[Structure.DataProperty].profile_background_custom_emoji_id ?? null;
	}

	public get emojiStatusCustomEmojiId() {
		return this[Structure.DataProperty].emoji_status_custom_emoji_id ?? null;
	}

	public get emojiStatusExpirationUnixTimestamp() {
		return this[Structure.DataProperty].emoji_status_expiration_date ?? null;
	}

	public get emojiStatusExpirationTimestamp() {
		const ts = this[Structure.DataProperty].emoji_status_expiration_date;
		return ts ? ts * 1000 : null;
	}

	public get emojiStatusExpirationDate() {
		const ts = this[Structure.DataProperty].emoji_status_expiration_date;
		return ts ? new Date(ts * 1000) : null;
	}

	public get bio() {
		return this[Structure.DataProperty].bio ?? null;
	}

	public get hasPrivateForwards() {
		return this[Structure.DataProperty].has_private_forwards ?? false;
	}

	public get hasRestrictedVoiceAndVideoMessages() {
		return this[Structure.DataProperty].has_restricted_voice_and_video_messages ?? false;
	}

	public get joinToSendMessages() {
		return this[Structure.DataProperty].join_to_send_messages ?? false;
	}

	public get joinByRequest() {
		return this[Structure.DataProperty].join_by_request ?? false;
	}

	public get description() {
		return this[Structure.DataProperty].description ?? null;
	}

	public get inviteLink() {
		return this[Structure.DataProperty].invite_link ?? null;
	}

	public get pinnedMessage(): Resolve<'InaccessibleMessage'> | Resolve<'BaseMessage'> | null {
		const data = this[Structure.DataProperty].pinned_message;
		return data ? createMaybeInaccessibleMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get permissions(): Resolve<'ChatPermissions'> | null {
		const data = this[Structure.DataProperty].permissions;
		return data ? createStructure(this[Structure.OwnerProperty], 'ChatPermissions', data) : null;
	}

	public get acceptedGiftTypes(): Resolve<'AcceptedGiftTypes'> | null {
		const data = this[Structure.DataProperty].accepted_gift_types;
		return data ? createStructure(this[Structure.OwnerProperty], 'AcceptedGiftTypes', data) : null;
	}

	public get canSendPaidMedia() {
		return this[Structure.DataProperty].can_send_paid_media ?? false;
	}

	public get slowModeDelay() {
		return this[Structure.DataProperty].slow_mode_delay ?? null;
	}

	public get unrestrictBoostCount() {
		return this[Structure.DataProperty].unrestrict_boost_count ?? null;
	}

	public get messageAutoDeleteTime() {
		return this[Structure.DataProperty].message_auto_delete_time ?? null;
	}

	public get hasAggressiveAntiSpamEnabled() {
		return this[Structure.DataProperty].has_aggressive_anti_spam_enabled ?? false;
	}

	public get hasHiddenMembers() {
		return this[Structure.DataProperty].has_hidden_members ?? false;
	}

	public get hasProtectedContent() {
		return this[Structure.DataProperty].has_protected_content ?? false;
	}

	public get hasVisibleHistory() {
		return this[Structure.DataProperty].has_visible_history ?? false;
	}

	public get stickerSetName() {
		return this[Structure.DataProperty].sticker_set_name ?? null;
	}

	public get canSetStickerSet() {
		return this[Structure.DataProperty].can_set_sticker_set ?? false;
	}

	public get customEmojiStickerSetName() {
		return this[Structure.DataProperty].custom_emoji_sticker_set_name ?? null;
	}

	public get linkedChatId() {
		return this[Structure.DataProperty].linked_chat_id ?? null;
	}

	public get location(): Resolve<'ChatLocation'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'ChatLocation', data) : null;
	}

	public get rating(): Resolve<'UserRating'> | null {
		const data = this[Structure.DataProperty].rating;
		return data ? createStructure(this[Structure.OwnerProperty], 'UserRating', data) : null;
	}

	public get firstProfileAudio(): Resolve<'Audio'> | null {
		const data = this[Structure.DataProperty].first_profile_audio;
		return data ? createStructure(this[Structure.OwnerProperty], 'Audio', data) : null;
	}

	public get uniqueGiftColors(): Resolve<'UniqueGiftColors'> | null {
		const data = this[Structure.DataProperty].unique_gift_colors;
		return data ? createStructure(this[Structure.OwnerProperty], 'UniqueGiftColors', data) : null;
	}

	public get paidMessageStarCount() {
		return this[Structure.DataProperty].paid_message_star_count ?? null;
	}

	public get guardBot(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].guard_bot;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get community(): Resolve<'Community'> | null {
		const data = this[Structure.DataProperty].community;
		return data ? createStructure(this[Structure.OwnerProperty], 'Community', data) : null;
	}
}
