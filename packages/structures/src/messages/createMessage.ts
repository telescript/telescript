import { APIMessage, MessageType } from '@telescript/api-types';
import { detectMessageType } from './detectMessageType.js';
import { createStructure, defaultOwner, type StructureOwner, type Resolve } from '../registry.js';

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

export function createMessage(data: APIMessage, owner: StructureOwner = defaultOwner): Message {
	switch (detectMessageType(data)) {
		case MessageType.Text:
			return createStructure(owner, 'TextMessage', data as APIMessage.Text);
		case MessageType.RichBlocks:
			return createStructure(owner, 'RichBlocksMessage', data as APIMessage.RichBlocks);
		case MessageType.Animation:
			return createStructure(owner, 'AnimationMessage', data as APIMessage.Animation);
		case MessageType.Audio:
			return createStructure(owner, 'AudioMessage', data as APIMessage.Audio);
		case MessageType.Document:
			return createStructure(owner, 'DocumentMessage', data as APIMessage.Document);
		case MessageType.LivePhoto:
			return createStructure(owner, 'LivePhotoMessage', data as APIMessage.LivePhoto);
		case MessageType.PaidMedia:
			return createStructure(owner, 'PaidMediaMessage', data as APIMessage.PaidMedia);
		case MessageType.Photo:
			return createStructure(owner, 'PhotoMessage', data as APIMessage.Photo);
		case MessageType.Sticker:
			return createStructure(owner, 'StickerMessage', data as APIMessage.Sticker);
		case MessageType.Story:
			return createStructure(owner, 'StoryMessage', data as APIMessage.Story);
		case MessageType.Video:
			return createStructure(owner, 'VideoMessage', data as APIMessage.Video);
		case MessageType.VideoNote:
			return createStructure(owner, 'VideoNoteMessage', data as APIMessage.VideoNote);
		case MessageType.Voice:
			return createStructure(owner, 'VoiceMessage', data as APIMessage.Voice);
		case MessageType.Checklist:
			return createStructure(owner, 'ChecklistMessage', data as APIMessage.Checklist);
		case MessageType.Contact:
			return createStructure(owner, 'ContactMessage', data as APIMessage.Contact);
		case MessageType.Dice:
			return createStructure(owner, 'DiceMessage', data as APIMessage.Dice);
		case MessageType.Game:
			return createStructure(owner, 'GameMessage', data as APIMessage.Game);
		case MessageType.Poll:
			return createStructure(owner, 'PollMessage', data as APIMessage.Poll);
		case MessageType.Venue:
			return createStructure(owner, 'VenueMessage', data as APIMessage.Venue);
		case MessageType.Location:
			return createStructure(owner, 'LocationMessage', data as APIMessage.Location);
		case MessageType.NewChatMembers:
			return createStructure(owner, 'NewChatMembersMessage', data as APIMessage.NewChatMembers);
		case MessageType.LeftChatMember:
			return createStructure(owner, 'LeftChatMemberMessage', data as APIMessage.LeftChatMember);
		case MessageType.ChatOwnerLeft:
			return createStructure(owner, 'ChatOwnerLeftMessage', data as APIMessage.ChatOwnerLeft);
		case MessageType.ChatOwnerChanged:
			return createStructure(owner, 'ChatOwnerChangedMessage', data as APIMessage.ChatOwnerChanged);
		case MessageType.NewChatTitle:
			return createStructure(owner, 'NewChatTitleMessage', data as APIMessage.NewChatTitle);
		case MessageType.NewChatPhoto:
			return createStructure(owner, 'NewChatPhotoMessage', data as APIMessage.NewChatPhoto);
		case MessageType.DeleteChatPhoto:
			return createStructure(owner, 'DeleteChatPhotoMessage', data as APIMessage.DeleteChatPhoto);
		case MessageType.GroupChatCreated:
			return createStructure(owner, 'GroupChatCreatedMessage', data as APIMessage.GroupChatCreated);
		case MessageType.SupergroupChatCreated:
			return createStructure(owner, 'SupergroupChatCreatedMessage', data as APIMessage.SupergroupChatCreated);
		case MessageType.ChannelChatCreated:
			return createStructure(owner, 'ChannelChatCreatedMessage', data as APIMessage.ChannelChatCreated);
		case MessageType.MessageAutoDeleteTimerChanged:
			return createStructure(
				owner,
				'MessageAutoDeleteTimerChangedMessage',
				data as APIMessage.MessageAutoDeleteTimerChanged,
			);
		case MessageType.MigrateToChat:
			return createStructure(owner, 'MigrateToChatMessage', data as APIMessage.MigrateToChat);
		case MessageType.MigrateFromChat:
			return createStructure(owner, 'MigrateFromChatMessage', data as APIMessage.MigrateFromChat);
		case MessageType.Pinned:
			return createStructure(owner, 'PinnedMessage', data as APIMessage.Pinned);
		case MessageType.Invoice:
			return createStructure(owner, 'InvoiceMessage', data as APIMessage.Invoice);
		case MessageType.SuccessfulPayment:
			return createStructure(owner, 'SuccessfulPaymentMessage', data as APIMessage.SuccessfulPayment);
		case MessageType.RefundedPayment:
			return createStructure(owner, 'RefundedPaymentMessage', data as APIMessage.RefundedPayment);
		case MessageType.UsersShared:
			return createStructure(owner, 'UsersSharedMessage', data as APIMessage.UsersShared);
		case MessageType.ChatShared:
			return createStructure(owner, 'ChatSharedMessage', data as APIMessage.ChatShared);
		case MessageType.Gift:
			return createStructure(owner, 'GiftMessage', data as APIMessage.Gift);
		case MessageType.UniqueGift:
			return createStructure(owner, 'UniqueGiftMessage', data as APIMessage.UniqueGift);
		case MessageType.GiftUpgradeSent:
			return createStructure(owner, 'GiftUpgradeSentMessage', data as APIMessage.GiftUpgradeSent);
		case MessageType.ConnectedWebsite:
			return createStructure(owner, 'ConnectedWebsiteMessage', data as APIMessage.ConnectedWebsite);
		case MessageType.WriteAccessAllowed:
			return createStructure(owner, 'WriteAccessAllowedMessage', data as APIMessage.WriteAccessAllowed);
		case MessageType.Passport:
			return createStructure(owner, 'PassportMessage', data as APIMessage.Passport);
		case MessageType.ProximityAlert:
			return createStructure(owner, 'ProximityAlertMessage', data as APIMessage.ProximityAlert);
		case MessageType.ChatBoostAdded:
			return createStructure(owner, 'ChatBoostAddedMessage', data as APIMessage.ChatBoostAdded);
		case MessageType.ChatBackgroundSet:
			return createStructure(owner, 'ChatBackgroundSetMessage', data as APIMessage.ChatBackgroundSet);
		case MessageType.ChecklistTasksDone:
			return createStructure(owner, 'ChecklistTasksDoneMessage', data as APIMessage.ChecklistTasksDone);
		case MessageType.ChecklistTasksAdded:
			return createStructure(owner, 'ChecklistTasksAddedMessage', data as APIMessage.ChecklistTasksAdded);
		case MessageType.CommunityChatAdded:
			return createStructure(owner, 'CommunityChatAddedMessage', data as APIMessage.CommunityChatAdded);
		case MessageType.CommunityChatJoined:
			return createStructure(owner, 'CommunityChatJoinedMessage', data as APIMessage.CommunityChatJoined);
		case MessageType.CommunityChatRemoved:
			return createStructure(owner, 'CommunityChatRemovedMessage', data as APIMessage.CommunityChatRemoved);
		case MessageType.DirectMessagePriceChanged:
			return createStructure(owner, 'DirectMessagePriceChangedMessage', data as APIMessage.DirectMessagePriceChanged);
		case MessageType.ForumTopicCreated:
			return createStructure(owner, 'ForumTopicCreatedMessage', data as APIMessage.ForumTopicCreated);
		case MessageType.ForumTopicEdited:
			return createStructure(owner, 'ForumTopicEditedMessage', data as APIMessage.ForumTopicEdited);
		case MessageType.ForumTopicClosed:
			return createStructure(owner, 'ForumTopicClosedMessage', data as APIMessage.ForumTopicClosed);
		case MessageType.ForumTopicReopened:
			return createStructure(owner, 'ForumTopicReopenedMessage', data as APIMessage.ForumTopicReopened);
		case MessageType.GeneralForumTopicHidden:
			return createStructure(owner, 'GeneralForumTopicHiddenMessage', data as APIMessage.GeneralForumTopicHidden);
		case MessageType.GeneralForumTopicUnhidden:
			return createStructure(owner, 'GeneralForumTopicUnhiddenMessage', data as APIMessage.GeneralForumTopicUnhidden);
		case MessageType.GiveawayCreated:
			return createStructure(owner, 'GiveawayCreatedMessage', data as APIMessage.GiveawayCreated);
		case MessageType.Giveaway:
			return createStructure(owner, 'GiveawayMessage', data as APIMessage.Giveaway);
		case MessageType.GiveawayWinners:
			return createStructure(owner, 'GiveawayWinnersMessage', data as APIMessage.GiveawayWinners);
		case MessageType.GiveawayCompleted:
			return createStructure(owner, 'GiveawayCompletedMessage', data as APIMessage.GiveawayCompleted);
		case MessageType.ManagedBotCreated:
			return createStructure(owner, 'ManagedBotCreatedMessage', data as APIMessage.ManagedBotCreated);
		case MessageType.PaidMessagePriceChanged:
			return createStructure(owner, 'PaidMessagePriceChangedMessage', data as APIMessage.PaidMessagePriceChanged);
		case MessageType.PollOptionAdded:
			return createStructure(owner, 'PollOptionAddedMessage', data as APIMessage.PollOptionAdded);
		case MessageType.PollOptionDeleted:
			return createStructure(owner, 'PollOptionDeletedMessage', data as APIMessage.PollOptionDeleted);
		case MessageType.SuggestedPostApproved:
			return createStructure(owner, 'SuggestedPostApprovedMessage', data as APIMessage.SuggestedPostApproved);
		case MessageType.SuggestedPostApprovalFailed:
			return createStructure(
				owner,
				'SuggestedPostApprovalFailedMessage',
				data as APIMessage.SuggestedPostApprovalFailed,
			);
		case MessageType.SuggestedPostDeclined:
			return createStructure(owner, 'SuggestedPostDeclinedMessage', data as APIMessage.SuggestedPostDeclined);
		case MessageType.SuggestedPostPaid:
			return createStructure(owner, 'SuggestedPostPaidMessage', data as APIMessage.SuggestedPostPaid);
		case MessageType.SuggestedPostRefunded:
			return createStructure(owner, 'SuggestedPostRefundedMessage', data as APIMessage.SuggestedPostRefunded);
		case MessageType.VideoChatScheduled:
			return createStructure(owner, 'VideoChatScheduledMessage', data as APIMessage.VideoChatScheduled);
		case MessageType.VideoChatStarted:
			return createStructure(owner, 'VideoChatStartedMessage', data as APIMessage.VideoChatStarted);
		case MessageType.VideoChatEnded:
			return createStructure(owner, 'VideoChatEndedMessage', data as APIMessage.VideoChatEnded);
		case MessageType.VideoChatParticipantsInvited:
			return createStructure(
				owner,
				'VideoChatParticipantsInvitedMessage',
				data as APIMessage.VideoChatParticipantsInvited,
			);
		case MessageType.WebAppData:
			return createStructure(owner, 'WebAppDataMessage', data as APIMessage.WebAppData);
		default:
			return createStructure(owner, 'BaseMessage', data);
	}
}
