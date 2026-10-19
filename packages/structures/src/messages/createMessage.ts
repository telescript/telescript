import { APIMessage, MessageType } from '@telescript/api-types';
import { createStructure, defaultOwner, type DefaultTypes, type StructureOwner, type Resolve } from '../registry.js';

export type Message =
	| Resolve<'BaseMessage'>
	| Resolve<'TextMessage'>
	| Resolve<'RichBlocksMessage'>
	| Resolve<'AnimationMessage'>
	| Resolve<'AudioMessage'>
	| Resolve<'DocumentMessage'>
	| Resolve<'LivePhotoMessage'>
	| Resolve<'PaidMediaMessage'>
	| Resolve<'PhotoMessage'>
	| Resolve<'StickerMessage'>
	| Resolve<'StoryMessage'>
	| Resolve<'VideoMessage'>
	| Resolve<'VideoNoteMessage'>
	| Resolve<'VoiceMessage'>
	| Resolve<'ChecklistMessage'>
	| Resolve<'ContactMessage'>
	| Resolve<'DiceMessage'>
	| Resolve<'GameMessage'>
	| Resolve<'PollMessage'>
	| Resolve<'VenueMessage'>
	| Resolve<'LocationMessage'>
	| Resolve<'NewChatMembersMessage'>
	| Resolve<'LeftChatMemberMessage'>
	| Resolve<'ChatOwnerLeftMessage'>
	| Resolve<'ChatOwnerChangedMessage'>
	| Resolve<'NewChatTitleMessage'>
	| Resolve<'NewChatPhotoMessage'>
	| Resolve<'DeleteChatPhotoMessage'>
	| Resolve<'GroupChatCreatedMessage'>
	| Resolve<'SupergroupChatCreatedMessage'>
	| Resolve<'ChannelChatCreatedMessage'>
	| Resolve<'MessageAutoDeleteTimerChangedMessage'>
	| Resolve<'MigrateToChatMessage'>
	| Resolve<'MigrateFromChatMessage'>
	| Resolve<'PinnedMessage'>
	| Resolve<'InvoiceMessage'>
	| Resolve<'SuccessfulPaymentMessage'>
	| Resolve<'RefundedPaymentMessage'>
	| Resolve<'UsersSharedMessage'>
	| Resolve<'ChatSharedMessage'>
	| Resolve<'GiftMessage'>
	| Resolve<'UniqueGiftMessage'>
	| Resolve<'GiftUpgradeSentMessage'>
	| Resolve<'ConnectedWebsiteMessage'>
	| Resolve<'WriteAccessAllowedMessage'>
	| Resolve<'PassportMessage'>
	| Resolve<'ProximityAlertMessage'>
	| Resolve<'ChatBoostAddedMessage'>
	| Resolve<'ChatBackgroundSetMessage'>
	| Resolve<'ChecklistTasksDoneMessage'>
	| Resolve<'ChecklistTasksAddedMessage'>
	| Resolve<'CommunityChatAddedMessage'>
	| Resolve<'CommunityChatJoinedMessage'>
	| Resolve<'CommunityChatRemovedMessage'>
	| Resolve<'DirectMessagePriceChangedMessage'>
	| Resolve<'ForumTopicCreatedMessage'>
	| Resolve<'ForumTopicEditedMessage'>
	| Resolve<'ForumTopicClosedMessage'>
	| Resolve<'ForumTopicReopenedMessage'>
	| Resolve<'GeneralForumTopicHiddenMessage'>
	| Resolve<'GeneralForumTopicUnhiddenMessage'>
	| Resolve<'GiveawayCreatedMessage'>
	| Resolve<'GiveawayMessage'>
	| Resolve<'GiveawayWinnersMessage'>
	| Resolve<'GiveawayCompletedMessage'>
	| Resolve<'ManagedBotCreatedMessage'>
	| Resolve<'PaidMessagePriceChangedMessage'>
	| Resolve<'PollOptionAddedMessage'>
	| Resolve<'PollOptionDeletedMessage'>
	| Resolve<'SuggestedPostApprovedMessage'>
	| Resolve<'SuggestedPostApprovalFailedMessage'>
	| Resolve<'SuggestedPostDeclinedMessage'>
	| Resolve<'SuggestedPostPaidMessage'>
	| Resolve<'SuggestedPostRefundedMessage'>
	| Resolve<'VideoChatScheduledMessage'>
	| Resolve<'VideoChatStartedMessage'>
	| Resolve<'VideoChatEndedMessage'>
	| Resolve<'VideoChatParticipantsInvitedMessage'>
	| Resolve<'WebAppDataMessage'>;

/**
 * The class of every message type, in detection order: some messages also carry the field of another type for backward
 * compatibility (an animation has `document`, a live photo `photo`, a venue `location`), so their own type comes first.
 * The keys are the API fields that identify each type.
 */
const messageClasses = {
	[MessageType.Text]: 'TextMessage',
	[MessageType.RichBlocks]: 'RichBlocksMessage',
	[MessageType.Animation]: 'AnimationMessage',
	[MessageType.Audio]: 'AudioMessage',
	[MessageType.Document]: 'DocumentMessage',
	[MessageType.LivePhoto]: 'LivePhotoMessage',
	[MessageType.PaidMedia]: 'PaidMediaMessage',
	[MessageType.Photo]: 'PhotoMessage',
	[MessageType.Sticker]: 'StickerMessage',
	[MessageType.Story]: 'StoryMessage',
	[MessageType.Video]: 'VideoMessage',
	[MessageType.VideoNote]: 'VideoNoteMessage',
	[MessageType.Voice]: 'VoiceMessage',
	[MessageType.Checklist]: 'ChecklistMessage',
	[MessageType.Contact]: 'ContactMessage',
	[MessageType.Dice]: 'DiceMessage',
	[MessageType.Game]: 'GameMessage',
	[MessageType.Poll]: 'PollMessage',
	[MessageType.Venue]: 'VenueMessage',
	[MessageType.Location]: 'LocationMessage',
	[MessageType.NewChatMembers]: 'NewChatMembersMessage',
	[MessageType.LeftChatMember]: 'LeftChatMemberMessage',
	[MessageType.ChatOwnerLeft]: 'ChatOwnerLeftMessage',
	[MessageType.ChatOwnerChanged]: 'ChatOwnerChangedMessage',
	[MessageType.NewChatTitle]: 'NewChatTitleMessage',
	[MessageType.NewChatPhoto]: 'NewChatPhotoMessage',
	[MessageType.DeleteChatPhoto]: 'DeleteChatPhotoMessage',
	[MessageType.GroupChatCreated]: 'GroupChatCreatedMessage',
	[MessageType.SupergroupChatCreated]: 'SupergroupChatCreatedMessage',
	[MessageType.ChannelChatCreated]: 'ChannelChatCreatedMessage',
	[MessageType.MessageAutoDeleteTimerChanged]: 'MessageAutoDeleteTimerChangedMessage',
	[MessageType.MigrateToChat]: 'MigrateToChatMessage',
	[MessageType.MigrateFromChat]: 'MigrateFromChatMessage',
	[MessageType.Pinned]: 'PinnedMessage',
	[MessageType.Invoice]: 'InvoiceMessage',
	[MessageType.SuccessfulPayment]: 'SuccessfulPaymentMessage',
	[MessageType.RefundedPayment]: 'RefundedPaymentMessage',
	[MessageType.UsersShared]: 'UsersSharedMessage',
	[MessageType.ChatShared]: 'ChatSharedMessage',
	[MessageType.Gift]: 'GiftMessage',
	[MessageType.UniqueGift]: 'UniqueGiftMessage',
	[MessageType.GiftUpgradeSent]: 'GiftUpgradeSentMessage',
	[MessageType.ConnectedWebsite]: 'ConnectedWebsiteMessage',
	[MessageType.WriteAccessAllowed]: 'WriteAccessAllowedMessage',
	[MessageType.Passport]: 'PassportMessage',
	[MessageType.ProximityAlert]: 'ProximityAlertMessage',
	[MessageType.ChatBoostAdded]: 'ChatBoostAddedMessage',
	[MessageType.ChatBackgroundSet]: 'ChatBackgroundSetMessage',
	[MessageType.ChecklistTasksDone]: 'ChecklistTasksDoneMessage',
	[MessageType.ChecklistTasksAdded]: 'ChecklistTasksAddedMessage',
	[MessageType.CommunityChatAdded]: 'CommunityChatAddedMessage',
	[MessageType.CommunityChatJoined]: 'CommunityChatJoinedMessage',
	[MessageType.CommunityChatRemoved]: 'CommunityChatRemovedMessage',
	[MessageType.DirectMessagePriceChanged]: 'DirectMessagePriceChangedMessage',
	[MessageType.ForumTopicCreated]: 'ForumTopicCreatedMessage',
	[MessageType.ForumTopicEdited]: 'ForumTopicEditedMessage',
	[MessageType.ForumTopicClosed]: 'ForumTopicClosedMessage',
	[MessageType.ForumTopicReopened]: 'ForumTopicReopenedMessage',
	[MessageType.GeneralForumTopicHidden]: 'GeneralForumTopicHiddenMessage',
	[MessageType.GeneralForumTopicUnhidden]: 'GeneralForumTopicUnhiddenMessage',
	[MessageType.GiveawayCreated]: 'GiveawayCreatedMessage',
	[MessageType.Giveaway]: 'GiveawayMessage',
	[MessageType.GiveawayWinners]: 'GiveawayWinnersMessage',
	[MessageType.GiveawayCompleted]: 'GiveawayCompletedMessage',
	[MessageType.ManagedBotCreated]: 'ManagedBotCreatedMessage',
	[MessageType.PaidMessagePriceChanged]: 'PaidMessagePriceChangedMessage',
	[MessageType.PollOptionAdded]: 'PollOptionAddedMessage',
	[MessageType.PollOptionDeleted]: 'PollOptionDeletedMessage',
	[MessageType.SuggestedPostApproved]: 'SuggestedPostApprovedMessage',
	[MessageType.SuggestedPostApprovalFailed]: 'SuggestedPostApprovalFailedMessage',
	[MessageType.SuggestedPostDeclined]: 'SuggestedPostDeclinedMessage',
	[MessageType.SuggestedPostPaid]: 'SuggestedPostPaidMessage',
	[MessageType.SuggestedPostRefunded]: 'SuggestedPostRefundedMessage',
	[MessageType.VideoChatScheduled]: 'VideoChatScheduledMessage',
	[MessageType.VideoChatStarted]: 'VideoChatStartedMessage',
	[MessageType.VideoChatEnded]: 'VideoChatEndedMessage',
	[MessageType.VideoChatParticipantsInvited]: 'VideoChatParticipantsInvitedMessage',
	[MessageType.WebAppData]: 'WebAppDataMessage',
} as const satisfies Record<MessageType, keyof DefaultTypes>;

export function detectMessageType(data: APIMessage.Base): MessageType | null {
	for (const type of Object.keys(messageClasses) as MessageType[]) {
		if (type in data) return type;
	}
	return null;
}

export function createMessage(data: APIMessage, owner: StructureOwner = defaultOwner): Message {
	const type = detectMessageType(data);
	return createStructure(owner, type ? messageClasses[type] : 'BaseMessage', data);
}
