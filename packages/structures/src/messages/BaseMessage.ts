import { APIMessage, MessageType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { createMessage, type Message } from './createMessage.js';
import type { CaptionedMessageMixin } from './mixins/CaptionedMessageMixin.js';
import type { GroupableMessageMixin } from './mixins/GroupableMessageMixin.js';
import type { VisualMessageMixin } from './mixins/VisualMessageMixin.js';
import { createMessageOrigin } from './origins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export class BaseMessage<
	out Type extends MessageType = MessageType,
	Data extends APIMessage.Base = APIMessage.FromType<Type>,
> extends Structure<Data> {
	/**
	 * The kind of message; `null` for a kind this version doesn't know yet (a plain `BaseMessage`).
	 */
	public get type(): Type | null {
		return null;
	}

	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get threadId() {
		return this[Structure.DataProperty].message_thread_id ?? null;
	}

	public get directMessagesTopic(): Resolve<'DirectMessagesTopic'> | null {
		const data = this[Structure.DataProperty].direct_messages_topic;
		return data ? createStructure(this[Structure.OwnerProperty], 'DirectMessagesTopic', data) : null;
	}

	public get from(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].from;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get senderChat() {
		const data = this[Structure.DataProperty].sender_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get senderBoostCount() {
		return this[Structure.DataProperty].sender_boost_count ?? null;
	}

	public get senderBusinessBot(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get senderTag() {
		return this[Structure.DataProperty].sender_tag ?? null;
	}

	public get receiverUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].receiver_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get ephemeralMessageId() {
		return this[Structure.DataProperty].ephemeral_message_id ?? null;
	}

	public get sentUnixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get sentTimestamp() {
		return this.sentUnixTimestamp * 1000;
	}

	public get sentDate() {
		return new Date(this.sentTimestamp);
	}

	public get guestQueryId() {
		return this[Structure.DataProperty].guest_query_id ?? null;
	}

	public get businessConnectionId() {
		return this[Structure.DataProperty].business_connection_id ?? null;
	}

	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get forwardOrigin() {
		const data = this[Structure.DataProperty].forward_origin;
		return data ? createMessageOrigin(data, this[Structure.OwnerProperty]) : null;
	}

	public get isTopicMessage() {
		return this[Structure.DataProperty].is_topic_message ?? false;
	}

	public get isAutomaticForward() {
		return this[Structure.DataProperty].is_automatic_forward ?? null;
	}

	public get replyToMessage(): Message | null {
		const data = this[Structure.DataProperty].reply_to_message;
		return data ? createMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get externalReply(): Resolve<'ExternalReplyInfo'> | null {
		const data = this[Structure.DataProperty].external_reply;
		return data ? createStructure(this[Structure.OwnerProperty], 'ExternalReplyInfo', data) : null;
	}

	public get quote(): Resolve<'TextQuote'> | null {
		const data = this[Structure.DataProperty].quote;
		return data ? createStructure(this[Structure.OwnerProperty], 'TextQuote', data) : null;
	}

	public get replyToStory(): Resolve<'Story'> | null {
		const data = this[Structure.DataProperty].reply_to_story;
		return data ? createStructure(this[Structure.OwnerProperty], 'Story', data) : null;
	}

	public get replyToChecklistTaskId() {
		return this[Structure.DataProperty].reply_to_checklist_task_id ?? null;
	}

	public get replyToPollOptionId() {
		return this[Structure.DataProperty].reply_to_poll_option_id ?? null;
	}

	public get viaBot(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].via_bot;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get guestBotCallerUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].guest_bot_caller_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get guestBotCallerChat() {
		const data = this[Structure.DataProperty].guest_bot_caller_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get editUnixTimestamp() {
		return this[Structure.DataProperty].edit_date ?? null;
	}

	public get editTimestamp() {
		const ts = this.editUnixTimestamp;
		return ts ? ts * 1000 : null;
	}

	public get editDate() {
		const ts = this.editTimestamp;
		return ts ? new Date(ts) : null;
	}

	public get hasProtectedContent() {
		return this[Structure.DataProperty].has_protected_content ?? null;
	}

	public get isFromOffline() {
		return this[Structure.DataProperty].is_from_offline ?? null;
	}

	public get isPaidPost() {
		return this[Structure.DataProperty].is_paid_post ?? null;
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public get paidStarCount() {
		return this[Structure.DataProperty].paid_star_count ?? null;
	}

	public get suggestedPostInfo(): Resolve<'SuggestedPostInfo'> | null {
		const data = this[Structure.DataProperty].suggested_post_info;
		return data ? createStructure(this[Structure.OwnerProperty], 'SuggestedPostInfo', data) : null;
	}

	public get effectId() {
		return this[Structure.DataProperty].effect_id ?? null;
	}

	public get replyMarkup(): Resolve<'InlineKeyboardMarkup'> | null {
		const data = this[Structure.DataProperty].reply_markup;
		return data ? createStructure(this[Structure.OwnerProperty], 'InlineKeyboardMarkup', data) : null;
	}

	public isText(): this is Resolve<'TextMessage'> {
		return false;
	}

	public isRichBlocks(): this is Resolve<'RichBlocksMessage'> {
		return false;
	}

	public isAnimation(): this is Resolve<'AnimationMessage'> {
		return false;
	}

	public isAudio(): this is Resolve<'AudioMessage'> {
		return false;
	}

	public isDocument(): this is Resolve<'DocumentMessage'> {
		return false;
	}

	public isLivePhoto(): this is Resolve<'LivePhotoMessage'> {
		return false;
	}

	public isPaidMedia(): this is Resolve<'PaidMediaMessage'> {
		return false;
	}

	public isPhoto(): this is Resolve<'PhotoMessage'> {
		return false;
	}

	public isSticker(): this is Resolve<'StickerMessage'> {
		return false;
	}

	public isStory(): this is Resolve<'StoryMessage'> {
		return false;
	}

	public isVideo(): this is Resolve<'VideoMessage'> {
		return false;
	}

	public isVideoNote(): this is Resolve<'VideoNoteMessage'> {
		return false;
	}

	public isVoice(): this is Resolve<'VoiceMessage'> {
		return false;
	}

	public isChecklist(): this is Resolve<'ChecklistMessage'> {
		return false;
	}

	public isContact(): this is Resolve<'ContactMessage'> {
		return false;
	}

	public isDice(): this is Resolve<'DiceMessage'> {
		return false;
	}

	public isGame(): this is Resolve<'GameMessage'> {
		return false;
	}

	public isPoll(): this is Resolve<'PollMessage'> {
		return false;
	}

	public isVenue(): this is Resolve<'VenueMessage'> {
		return false;
	}

	public isLocation(): this is Resolve<'LocationMessage'> {
		return false;
	}

	public isNewChatMembers(): this is Resolve<'NewChatMembersMessage'> {
		return false;
	}

	public isLeftChatMember(): this is Resolve<'LeftChatMemberMessage'> {
		return false;
	}

	public isChatOwnerLeft(): this is Resolve<'ChatOwnerLeftMessage'> {
		return false;
	}

	public isChatOwnerChanged(): this is Resolve<'ChatOwnerChangedMessage'> {
		return false;
	}

	public isNewChatTitle(): this is Resolve<'NewChatTitleMessage'> {
		return false;
	}

	public isNewChatPhoto(): this is Resolve<'NewChatPhotoMessage'> {
		return false;
	}

	public isDeleteChatPhoto(): this is Resolve<'DeleteChatPhotoMessage'> {
		return false;
	}

	public isGroupChatCreated(): this is Resolve<'GroupChatCreatedMessage'> {
		return false;
	}

	public isSupergroupChatCreated(): this is Resolve<'SupergroupChatCreatedMessage'> {
		return false;
	}

	public isChannelChatCreated(): this is Resolve<'ChannelChatCreatedMessage'> {
		return false;
	}

	public isMessageAutoDeleteTimerChanged(): this is Resolve<'MessageAutoDeleteTimerChangedMessage'> {
		return false;
	}

	public isMigrateToChat(): this is Resolve<'MigrateToChatMessage'> {
		return false;
	}

	public isMigrateFromChat(): this is Resolve<'MigrateFromChatMessage'> {
		return false;
	}

	public isPinned(): this is Resolve<'PinnedMessage'> {
		return false;
	}

	public isInvoice(): this is Resolve<'InvoiceMessage'> {
		return false;
	}

	public isSuccessfulPayment(): this is Resolve<'SuccessfulPaymentMessage'> {
		return false;
	}

	public isRefundedPayment(): this is Resolve<'RefundedPaymentMessage'> {
		return false;
	}

	public isUsersShared(): this is Resolve<'UsersSharedMessage'> {
		return false;
	}

	public isChatShared(): this is Resolve<'ChatSharedMessage'> {
		return false;
	}

	public isGift(): this is Resolve<'GiftMessage'> {
		return false;
	}

	public isUniqueGift(): this is Resolve<'UniqueGiftMessage'> {
		return false;
	}

	public isGiftUpgradeSent(): this is Resolve<'GiftUpgradeSentMessage'> {
		return false;
	}

	public isConnectedWebsite(): this is Resolve<'ConnectedWebsiteMessage'> {
		return false;
	}

	public isWriteAccessAllowed(): this is Resolve<'WriteAccessAllowedMessage'> {
		return false;
	}

	public isPassport(): this is Resolve<'PassportMessage'> {
		return false;
	}

	public isProximityAlert(): this is Resolve<'ProximityAlertMessage'> {
		return false;
	}

	public isChatBoostAdded(): this is Resolve<'ChatBoostAddedMessage'> {
		return false;
	}

	public isChatBackgroundSet(): this is Resolve<'ChatBackgroundSetMessage'> {
		return false;
	}

	public isChecklistTasksDone(): this is Resolve<'ChecklistTasksDoneMessage'> {
		return false;
	}

	public isChecklistTasksAdded(): this is Resolve<'ChecklistTasksAddedMessage'> {
		return false;
	}

	public isCommunityChatAdded(): this is Resolve<'CommunityChatAddedMessage'> {
		return false;
	}

	public isCommunityChatJoined(): this is Resolve<'CommunityChatJoinedMessage'> {
		return false;
	}

	public isCommunityChatRemoved(): this is Resolve<'CommunityChatRemovedMessage'> {
		return false;
	}

	public isDirectMessagePriceChanged(): this is Resolve<'DirectMessagePriceChangedMessage'> {
		return false;
	}

	public isForumTopicCreated(): this is Resolve<'ForumTopicCreatedMessage'> {
		return false;
	}

	public isForumTopicEdited(): this is Resolve<'ForumTopicEditedMessage'> {
		return false;
	}

	public isForumTopicClosed(): this is Resolve<'ForumTopicClosedMessage'> {
		return false;
	}

	public isForumTopicReopened(): this is Resolve<'ForumTopicReopenedMessage'> {
		return false;
	}

	public isGeneralForumTopicHidden(): this is Resolve<'GeneralForumTopicHiddenMessage'> {
		return false;
	}

	public isGeneralForumTopicUnhidden(): this is Resolve<'GeneralForumTopicUnhiddenMessage'> {
		return false;
	}

	public isGiveawayCreated(): this is Resolve<'GiveawayCreatedMessage'> {
		return false;
	}

	public isGiveaway(): this is Resolve<'GiveawayMessage'> {
		return false;
	}

	public isGiveawayWinners(): this is Resolve<'GiveawayWinnersMessage'> {
		return false;
	}

	public isGiveawayCompleted(): this is Resolve<'GiveawayCompletedMessage'> {
		return false;
	}

	public isManagedBotCreated(): this is Resolve<'ManagedBotCreatedMessage'> {
		return false;
	}

	public isPaidMessagePriceChanged(): this is Resolve<'PaidMessagePriceChangedMessage'> {
		return false;
	}

	public isPollOptionAdded(): this is Resolve<'PollOptionAddedMessage'> {
		return false;
	}

	public isPollOptionDeleted(): this is Resolve<'PollOptionDeletedMessage'> {
		return false;
	}

	public isSuggestedPostApproved(): this is Resolve<'SuggestedPostApprovedMessage'> {
		return false;
	}

	public isSuggestedPostApprovalFailed(): this is Resolve<'SuggestedPostApprovalFailedMessage'> {
		return false;
	}

	public isSuggestedPostDeclined(): this is Resolve<'SuggestedPostDeclinedMessage'> {
		return false;
	}

	public isSuggestedPostPaid(): this is Resolve<'SuggestedPostPaidMessage'> {
		return false;
	}

	public isSuggestedPostRefunded(): this is Resolve<'SuggestedPostRefundedMessage'> {
		return false;
	}

	public isVideoChatScheduled(): this is Resolve<'VideoChatScheduledMessage'> {
		return false;
	}

	public isVideoChatStarted(): this is Resolve<'VideoChatStartedMessage'> {
		return false;
	}

	public isVideoChatEnded(): this is Resolve<'VideoChatEndedMessage'> {
		return false;
	}

	public isVideoChatParticipantsInvited(): this is Resolve<'VideoChatParticipantsInvitedMessage'> {
		return false;
	}

	public isWebAppData(): this is Resolve<'WebAppDataMessage'> {
		return false;
	}

	public isCaptioned(): this is CaptionedMessageMixin {
		return false;
	}

	public isVisual(): this is VisualMessageMixin {
		return false;
	}

	public isGroupable(): this is GroupableMessageMixin {
		return false;
	}

	public isInaccessible(): this is Resolve<'InaccessibleMessage'> {
		return false;
	}
}
