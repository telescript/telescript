// The client classes of messages: each structures message class plus the message actions.
import type { APIMessage, MessageType } from '@telescript/api-types';
import * as S from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { extendStructure } from '../extendStructure.js';
import { EditCaptionAction } from './actions/EditCaptionAction.js';
import { EditTextAction } from './actions/EditTextAction.js';
import { ForwardAction } from './actions/ForwardAction.js';
import { ReplyAction } from './actions/ReplyAction.js';

/**
 * What a message created by a client adds to its structures class.
 */
export interface MessageActions
	extends ClientMixin, Pick<ReplyAction, 'reply'>, Pick<ForwardAction, 'forward' | 'copy' | 'delete'> {}

// The mixins that implement MessageActions: an action is added to both.
const messageMixins = [ClientMixin, ReplyAction, ForwardAction];

type ClientClass<Parent extends S.Constructor, Added> = new (
	...args: ConstructorParameters<Parent>
) => InstanceType<Parent> & Added;

// The constants below declare their types instead of inferring them from this call: inferring would go through
// `TypeOverrides`, which is built from these types.
type WithActions<Parent extends S.Constructor, Extra = unknown> = ClientClass<Parent, MessageActions & Extra>;

// What only some kinds of messages add.
type EditsText = Pick<EditTextAction, 'editText'>;
type EditsCaption = Pick<EditCaptionAction, 'editCaption'>;

function withActions<Parent extends S.Constructor<S.Structure<unknown>>, Extra = unknown>(
	Parent: Parent,
	...mixins: S.Constructor[]
) {
	return extendStructure(Parent, [...messageMixins, ...mixins]) as WithActions<Parent, Extra>;
}

export const BaseMessage: WithActions<typeof S.BaseMessage<never>> = withActions(S.BaseMessage<never>);
export type BaseMessage<
	Type extends MessageType = MessageType,
	Data extends APIMessage.Base = APIMessage.FromType<Type>,
> = S.BaseMessage<Type, Data> & MessageActions;

// Not a message (it has no content): only `.client`.
export const InaccessibleMessage: ClientClass<typeof S.InaccessibleMessage, ClientMixin> = extendStructure(
	S.InaccessibleMessage,
	[ClientMixin],
) as ClientClass<typeof S.InaccessibleMessage, ClientMixin>;
export type InaccessibleMessage = InstanceType<typeof InaccessibleMessage>;

export const AnimationMessage: WithActions<typeof S.AnimationMessage, EditsCaption> = withActions(
	S.AnimationMessage,
	EditCaptionAction,
);
export type AnimationMessage = InstanceType<typeof AnimationMessage>;

export const AudioMessage: WithActions<typeof S.AudioMessage, EditsCaption> = withActions(
	S.AudioMessage,
	EditCaptionAction,
);
export type AudioMessage = InstanceType<typeof AudioMessage>;

export const ChannelChatCreatedMessage: WithActions<typeof S.ChannelChatCreatedMessage> = withActions(
	S.ChannelChatCreatedMessage,
);
export type ChannelChatCreatedMessage = InstanceType<typeof ChannelChatCreatedMessage>;

export const ChatBackgroundSetMessage: WithActions<typeof S.ChatBackgroundSetMessage> = withActions(
	S.ChatBackgroundSetMessage,
);
export type ChatBackgroundSetMessage = InstanceType<typeof ChatBackgroundSetMessage>;

export const ChatBoostAddedMessage: WithActions<typeof S.ChatBoostAddedMessage> = withActions(S.ChatBoostAddedMessage);
export type ChatBoostAddedMessage = InstanceType<typeof ChatBoostAddedMessage>;

export const ChatOwnerChangedMessage: WithActions<typeof S.ChatOwnerChangedMessage> = withActions(
	S.ChatOwnerChangedMessage,
);
export type ChatOwnerChangedMessage = InstanceType<typeof ChatOwnerChangedMessage>;

export const ChatOwnerLeftMessage: WithActions<typeof S.ChatOwnerLeftMessage> = withActions(S.ChatOwnerLeftMessage);
export type ChatOwnerLeftMessage = InstanceType<typeof ChatOwnerLeftMessage>;

export const ChatSharedMessage: WithActions<typeof S.ChatSharedMessage> = withActions(S.ChatSharedMessage);
export type ChatSharedMessage = InstanceType<typeof ChatSharedMessage>;

export const ChecklistMessage: WithActions<typeof S.ChecklistMessage> = withActions(S.ChecklistMessage);
export type ChecklistMessage = InstanceType<typeof ChecklistMessage>;

export const ChecklistTasksAddedMessage: WithActions<typeof S.ChecklistTasksAddedMessage> = withActions(
	S.ChecklistTasksAddedMessage,
);
export type ChecklistTasksAddedMessage = InstanceType<typeof ChecklistTasksAddedMessage>;

export const ChecklistTasksDoneMessage: WithActions<typeof S.ChecklistTasksDoneMessage> = withActions(
	S.ChecklistTasksDoneMessage,
);
export type ChecklistTasksDoneMessage = InstanceType<typeof ChecklistTasksDoneMessage>;

export const CommunityChatAddedMessage: WithActions<typeof S.CommunityChatAddedMessage> = withActions(
	S.CommunityChatAddedMessage,
);
export type CommunityChatAddedMessage = InstanceType<typeof CommunityChatAddedMessage>;

export const CommunityChatJoinedMessage: WithActions<typeof S.CommunityChatJoinedMessage> = withActions(
	S.CommunityChatJoinedMessage,
);
export type CommunityChatJoinedMessage = InstanceType<typeof CommunityChatJoinedMessage>;

export const CommunityChatRemovedMessage: WithActions<typeof S.CommunityChatRemovedMessage> = withActions(
	S.CommunityChatRemovedMessage,
);
export type CommunityChatRemovedMessage = InstanceType<typeof CommunityChatRemovedMessage>;

export const ConnectedWebsiteMessage: WithActions<typeof S.ConnectedWebsiteMessage> = withActions(
	S.ConnectedWebsiteMessage,
);
export type ConnectedWebsiteMessage = InstanceType<typeof ConnectedWebsiteMessage>;

export const ContactMessage: WithActions<typeof S.ContactMessage> = withActions(S.ContactMessage);
export type ContactMessage = InstanceType<typeof ContactMessage>;

export const DeleteChatPhotoMessage: WithActions<typeof S.DeleteChatPhotoMessage> = withActions(
	S.DeleteChatPhotoMessage,
);
export type DeleteChatPhotoMessage = InstanceType<typeof DeleteChatPhotoMessage>;

export const DiceMessage: WithActions<typeof S.DiceMessage> = withActions(S.DiceMessage);
export type DiceMessage = InstanceType<typeof DiceMessage>;

export const DirectMessagePriceChangedMessage: WithActions<typeof S.DirectMessagePriceChangedMessage> = withActions(
	S.DirectMessagePriceChangedMessage,
);
export type DirectMessagePriceChangedMessage = InstanceType<typeof DirectMessagePriceChangedMessage>;

export const DocumentMessage: WithActions<typeof S.DocumentMessage, EditsCaption> = withActions(
	S.DocumentMessage,
	EditCaptionAction,
);
export type DocumentMessage = InstanceType<typeof DocumentMessage>;

export const ForumTopicClosedMessage: WithActions<typeof S.ForumTopicClosedMessage> = withActions(
	S.ForumTopicClosedMessage,
);
export type ForumTopicClosedMessage = InstanceType<typeof ForumTopicClosedMessage>;

export const ForumTopicCreatedMessage: WithActions<typeof S.ForumTopicCreatedMessage> = withActions(
	S.ForumTopicCreatedMessage,
);
export type ForumTopicCreatedMessage = InstanceType<typeof ForumTopicCreatedMessage>;

export const ForumTopicEditedMessage: WithActions<typeof S.ForumTopicEditedMessage> = withActions(
	S.ForumTopicEditedMessage,
);
export type ForumTopicEditedMessage = InstanceType<typeof ForumTopicEditedMessage>;

export const ForumTopicReopenedMessage: WithActions<typeof S.ForumTopicReopenedMessage> = withActions(
	S.ForumTopicReopenedMessage,
);
export type ForumTopicReopenedMessage = InstanceType<typeof ForumTopicReopenedMessage>;

export const GameMessage: WithActions<typeof S.GameMessage> = withActions(S.GameMessage);
export type GameMessage = InstanceType<typeof GameMessage>;

export const GeneralForumTopicHiddenMessage: WithActions<typeof S.GeneralForumTopicHiddenMessage> = withActions(
	S.GeneralForumTopicHiddenMessage,
);
export type GeneralForumTopicHiddenMessage = InstanceType<typeof GeneralForumTopicHiddenMessage>;

export const GeneralForumTopicUnhiddenMessage: WithActions<typeof S.GeneralForumTopicUnhiddenMessage> = withActions(
	S.GeneralForumTopicUnhiddenMessage,
);
export type GeneralForumTopicUnhiddenMessage = InstanceType<typeof GeneralForumTopicUnhiddenMessage>;

export const GiftMessage: WithActions<typeof S.GiftMessage> = withActions(S.GiftMessage);
export type GiftMessage = InstanceType<typeof GiftMessage>;

export const GiftUpgradeSentMessage: WithActions<typeof S.GiftUpgradeSentMessage> = withActions(
	S.GiftUpgradeSentMessage,
);
export type GiftUpgradeSentMessage = InstanceType<typeof GiftUpgradeSentMessage>;

export const GiveawayCompletedMessage: WithActions<typeof S.GiveawayCompletedMessage> = withActions(
	S.GiveawayCompletedMessage,
);
export type GiveawayCompletedMessage = InstanceType<typeof GiveawayCompletedMessage>;

export const GiveawayCreatedMessage: WithActions<typeof S.GiveawayCreatedMessage> = withActions(
	S.GiveawayCreatedMessage,
);
export type GiveawayCreatedMessage = InstanceType<typeof GiveawayCreatedMessage>;

export const GiveawayMessage: WithActions<typeof S.GiveawayMessage> = withActions(S.GiveawayMessage);
export type GiveawayMessage = InstanceType<typeof GiveawayMessage>;

export const GiveawayWinnersMessage: WithActions<typeof S.GiveawayWinnersMessage> = withActions(
	S.GiveawayWinnersMessage,
);
export type GiveawayWinnersMessage = InstanceType<typeof GiveawayWinnersMessage>;

export const GroupChatCreatedMessage: WithActions<typeof S.GroupChatCreatedMessage> = withActions(
	S.GroupChatCreatedMessage,
);
export type GroupChatCreatedMessage = InstanceType<typeof GroupChatCreatedMessage>;

export const InvoiceMessage: WithActions<typeof S.InvoiceMessage> = withActions(S.InvoiceMessage);
export type InvoiceMessage = InstanceType<typeof InvoiceMessage>;

export const LeftChatMemberMessage: WithActions<typeof S.LeftChatMemberMessage> = withActions(S.LeftChatMemberMessage);
export type LeftChatMemberMessage = InstanceType<typeof LeftChatMemberMessage>;

export const LivePhotoMessage: WithActions<typeof S.LivePhotoMessage, EditsCaption> = withActions(
	S.LivePhotoMessage,
	EditCaptionAction,
);
export type LivePhotoMessage = InstanceType<typeof LivePhotoMessage>;

export const LocationMessage: WithActions<typeof S.LocationMessage> = withActions(S.LocationMessage);
export type LocationMessage = InstanceType<typeof LocationMessage>;

export const ManagedBotCreatedMessage: WithActions<typeof S.ManagedBotCreatedMessage> = withActions(
	S.ManagedBotCreatedMessage,
);
export type ManagedBotCreatedMessage = InstanceType<typeof ManagedBotCreatedMessage>;

export const MessageAutoDeleteTimerChangedMessage: WithActions<typeof S.MessageAutoDeleteTimerChangedMessage> =
	withActions(S.MessageAutoDeleteTimerChangedMessage);
export type MessageAutoDeleteTimerChangedMessage = InstanceType<typeof MessageAutoDeleteTimerChangedMessage>;

export const MigrateFromChatMessage: WithActions<typeof S.MigrateFromChatMessage> = withActions(
	S.MigrateFromChatMessage,
);
export type MigrateFromChatMessage = InstanceType<typeof MigrateFromChatMessage>;

export const MigrateToChatMessage: WithActions<typeof S.MigrateToChatMessage> = withActions(S.MigrateToChatMessage);
export type MigrateToChatMessage = InstanceType<typeof MigrateToChatMessage>;

export const NewChatMembersMessage: WithActions<typeof S.NewChatMembersMessage> = withActions(S.NewChatMembersMessage);
export type NewChatMembersMessage = InstanceType<typeof NewChatMembersMessage>;

export const NewChatPhotoMessage: WithActions<typeof S.NewChatPhotoMessage> = withActions(S.NewChatPhotoMessage);
export type NewChatPhotoMessage = InstanceType<typeof NewChatPhotoMessage>;

export const NewChatTitleMessage: WithActions<typeof S.NewChatTitleMessage> = withActions(S.NewChatTitleMessage);
export type NewChatTitleMessage = InstanceType<typeof NewChatTitleMessage>;

export const PaidMediaMessage: WithActions<typeof S.PaidMediaMessage, EditsCaption> = withActions(
	S.PaidMediaMessage,
	EditCaptionAction,
);
export type PaidMediaMessage = InstanceType<typeof PaidMediaMessage>;

export const PaidMessagePriceChangedMessage: WithActions<typeof S.PaidMessagePriceChangedMessage> = withActions(
	S.PaidMessagePriceChangedMessage,
);
export type PaidMessagePriceChangedMessage = InstanceType<typeof PaidMessagePriceChangedMessage>;

export const PassportMessage: WithActions<typeof S.PassportMessage> = withActions(S.PassportMessage);
export type PassportMessage = InstanceType<typeof PassportMessage>;

export const PhotoMessage: WithActions<typeof S.PhotoMessage, EditsCaption> = withActions(
	S.PhotoMessage,
	EditCaptionAction,
);
export type PhotoMessage = InstanceType<typeof PhotoMessage>;

export const PinnedMessage: WithActions<typeof S.PinnedMessage> = withActions(S.PinnedMessage);
export type PinnedMessage = InstanceType<typeof PinnedMessage>;

export const PollMessage: WithActions<typeof S.PollMessage> = withActions(S.PollMessage);
export type PollMessage = InstanceType<typeof PollMessage>;

export const PollOptionAddedMessage: WithActions<typeof S.PollOptionAddedMessage> = withActions(
	S.PollOptionAddedMessage,
);
export type PollOptionAddedMessage = InstanceType<typeof PollOptionAddedMessage>;

export const PollOptionDeletedMessage: WithActions<typeof S.PollOptionDeletedMessage> = withActions(
	S.PollOptionDeletedMessage,
);
export type PollOptionDeletedMessage = InstanceType<typeof PollOptionDeletedMessage>;

export const ProximityAlertMessage: WithActions<typeof S.ProximityAlertMessage> = withActions(S.ProximityAlertMessage);
export type ProximityAlertMessage = InstanceType<typeof ProximityAlertMessage>;

export const RefundedPaymentMessage: WithActions<typeof S.RefundedPaymentMessage> = withActions(
	S.RefundedPaymentMessage,
);
export type RefundedPaymentMessage = InstanceType<typeof RefundedPaymentMessage>;

export const RichBlocksMessage: WithActions<typeof S.RichBlocksMessage> = withActions(S.RichBlocksMessage);
export type RichBlocksMessage = InstanceType<typeof RichBlocksMessage>;

export const StickerMessage: WithActions<typeof S.StickerMessage> = withActions(S.StickerMessage);
export type StickerMessage = InstanceType<typeof StickerMessage>;

export const StoryMessage: WithActions<typeof S.StoryMessage> = withActions(S.StoryMessage);
export type StoryMessage = InstanceType<typeof StoryMessage>;

export const SuccessfulPaymentMessage: WithActions<typeof S.SuccessfulPaymentMessage> = withActions(
	S.SuccessfulPaymentMessage,
);
export type SuccessfulPaymentMessage = InstanceType<typeof SuccessfulPaymentMessage>;

export const SuggestedPostApprovalFailedMessage: WithActions<typeof S.SuggestedPostApprovalFailedMessage> = withActions(
	S.SuggestedPostApprovalFailedMessage,
);
export type SuggestedPostApprovalFailedMessage = InstanceType<typeof SuggestedPostApprovalFailedMessage>;

export const SuggestedPostApprovedMessage: WithActions<typeof S.SuggestedPostApprovedMessage> = withActions(
	S.SuggestedPostApprovedMessage,
);
export type SuggestedPostApprovedMessage = InstanceType<typeof SuggestedPostApprovedMessage>;

export const SuggestedPostDeclinedMessage: WithActions<typeof S.SuggestedPostDeclinedMessage> = withActions(
	S.SuggestedPostDeclinedMessage,
);
export type SuggestedPostDeclinedMessage = InstanceType<typeof SuggestedPostDeclinedMessage>;

export const SuggestedPostPaidMessage: WithActions<typeof S.SuggestedPostPaidMessage> = withActions(
	S.SuggestedPostPaidMessage,
);
export type SuggestedPostPaidMessage = InstanceType<typeof SuggestedPostPaidMessage>;

export const SuggestedPostRefundedMessage: WithActions<typeof S.SuggestedPostRefundedMessage> = withActions(
	S.SuggestedPostRefundedMessage,
);
export type SuggestedPostRefundedMessage = InstanceType<typeof SuggestedPostRefundedMessage>;

export const SupergroupChatCreatedMessage: WithActions<typeof S.SupergroupChatCreatedMessage> = withActions(
	S.SupergroupChatCreatedMessage,
);
export type SupergroupChatCreatedMessage = InstanceType<typeof SupergroupChatCreatedMessage>;

export const TextMessage: WithActions<typeof S.TextMessage, EditsText> = withActions(S.TextMessage, EditTextAction);
export type TextMessage = InstanceType<typeof TextMessage>;

export const UniqueGiftMessage: WithActions<typeof S.UniqueGiftMessage> = withActions(S.UniqueGiftMessage);
export type UniqueGiftMessage = InstanceType<typeof UniqueGiftMessage>;

export const UsersSharedMessage: WithActions<typeof S.UsersSharedMessage> = withActions(S.UsersSharedMessage);
export type UsersSharedMessage = InstanceType<typeof UsersSharedMessage>;

export const VenueMessage: WithActions<typeof S.VenueMessage> = withActions(S.VenueMessage);
export type VenueMessage = InstanceType<typeof VenueMessage>;

export const VideoChatEndedMessage: WithActions<typeof S.VideoChatEndedMessage> = withActions(S.VideoChatEndedMessage);
export type VideoChatEndedMessage = InstanceType<typeof VideoChatEndedMessage>;

export const VideoChatParticipantsInvitedMessage: WithActions<typeof S.VideoChatParticipantsInvitedMessage> =
	withActions(S.VideoChatParticipantsInvitedMessage);
export type VideoChatParticipantsInvitedMessage = InstanceType<typeof VideoChatParticipantsInvitedMessage>;

export const VideoChatScheduledMessage: WithActions<typeof S.VideoChatScheduledMessage> = withActions(
	S.VideoChatScheduledMessage,
);
export type VideoChatScheduledMessage = InstanceType<typeof VideoChatScheduledMessage>;

export const VideoChatStartedMessage: WithActions<typeof S.VideoChatStartedMessage> = withActions(
	S.VideoChatStartedMessage,
);
export type VideoChatStartedMessage = InstanceType<typeof VideoChatStartedMessage>;

export const VideoMessage: WithActions<typeof S.VideoMessage, EditsCaption> = withActions(
	S.VideoMessage,
	EditCaptionAction,
);
export type VideoMessage = InstanceType<typeof VideoMessage>;

export const VideoNoteMessage: WithActions<typeof S.VideoNoteMessage> = withActions(S.VideoNoteMessage);
export type VideoNoteMessage = InstanceType<typeof VideoNoteMessage>;

export const VoiceMessage: WithActions<typeof S.VoiceMessage, EditsCaption> = withActions(
	S.VoiceMessage,
	EditCaptionAction,
);
export type VoiceMessage = InstanceType<typeof VoiceMessage>;

export const WebAppDataMessage: WithActions<typeof S.WebAppDataMessage> = withActions(S.WebAppDataMessage);
export type WebAppDataMessage = InstanceType<typeof WebAppDataMessage>;

export const WriteAccessAllowedMessage: WithActions<typeof S.WriteAccessAllowedMessage> = withActions(
	S.WriteAccessAllowedMessage,
);
export type WriteAccessAllowedMessage = InstanceType<typeof WriteAccessAllowedMessage>;
