import { registerStructures } from '../registry.js';
import { AnimationMessage } from './AnimationMessage.js';
import { AudioMessage } from './AudioMessage.js';
import { BaseMessage } from './BaseMessage.js';
import { ChannelChatCreatedMessage } from './ChannelChatCreatedMessage.js';
import { ChatBackgroundSetMessage } from './ChatBackgroundSetMessage.js';
import { ChatBoostAddedMessage } from './ChatBoostAddedMessage.js';
import { ChatOwnerChangedMessage } from './ChatOwnerChangedMessage.js';
import { ChatOwnerLeftMessage } from './ChatOwnerLeftMessage.js';
import { ChatSharedMessage } from './ChatSharedMessage.js';
import { ChecklistMessage } from './ChecklistMessage.js';
import { ChecklistTasksAddedMessage } from './ChecklistTasksAddedMessage.js';
import { ChecklistTasksDoneMessage } from './ChecklistTasksDoneMessage.js';
import { CommunityChatAddedMessage } from './CommunityChatAddedMessage.js';
import { CommunityChatJoinedMessage } from './CommunityChatJoinedMessage.js';
import { CommunityChatRemovedMessage } from './CommunityChatRemovedMessage.js';
import { ConnectedWebsiteMessage } from './ConnectedWebsiteMessage.js';
import { ContactMessage } from './ContactMessage.js';
import { DeleteChatPhotoMessage } from './DeleteChatPhotoMessage.js';
import { DiceMessage } from './DiceMessage.js';
import { DirectMessagePriceChangedMessage } from './DirectMessagePriceChangedMessage.js';
import { DocumentMessage } from './DocumentMessage.js';
import { ExternalReplyInfo } from './ExternalReplyInfo.js';
import { ForumTopicClosedMessage } from './ForumTopicClosedMessage.js';
import { ForumTopicCreatedMessage } from './ForumTopicCreatedMessage.js';
import { ForumTopicEditedMessage } from './ForumTopicEditedMessage.js';
import { ForumTopicReopenedMessage } from './ForumTopicReopenedMessage.js';
import { GameMessage } from './GameMessage.js';
import { GeneralForumTopicHiddenMessage } from './GeneralForumTopicHiddenMessage.js';
import { GeneralForumTopicUnhiddenMessage } from './GeneralForumTopicUnhiddenMessage.js';
import { GiftMessage } from './GiftMessage.js';
import { GiftUpgradeSentMessage } from './GiftUpgradeSentMessage.js';
import { GiveawayCompletedMessage } from './GiveawayCompletedMessage.js';
import { GiveawayCreatedMessage } from './GiveawayCreatedMessage.js';
import { GiveawayMessage } from './GiveawayMessage.js';
import { GiveawayWinnersMessage } from './GiveawayWinnersMessage.js';
import { GroupChatCreatedMessage } from './GroupChatCreatedMessage.js';
import { InaccessibleMessage } from './InaccessibleMessage.js';
import { InvoiceMessage } from './InvoiceMessage.js';
import { LeftChatMemberMessage } from './LeftChatMemberMessage.js';
import { LinkPreviewOptions } from './LinkPreviewOptions.js';
import { LivePhotoMessage } from './LivePhotoMessage.js';
import { LocationMessage } from './LocationMessage.js';
import { ManagedBotCreatedMessage } from './ManagedBotCreatedMessage.js';
import { MessageAutoDeleteTimerChangedMessage } from './MessageAutoDeleteTimerChangedMessage.js';
import { MigrateFromChatMessage } from './MigrateFromChatMessage.js';
import { MigrateToChatMessage } from './MigrateToChatMessage.js';
import { NewChatMembersMessage } from './NewChatMembersMessage.js';
import { NewChatPhotoMessage } from './NewChatPhotoMessage.js';
import { NewChatTitleMessage } from './NewChatTitleMessage.js';
import { PaidMediaMessage } from './PaidMediaMessage.js';
import { PaidMessagePriceChangedMessage } from './PaidMessagePriceChangedMessage.js';
import { PassportMessage } from './PassportMessage.js';
import { PhotoMessage } from './PhotoMessage.js';
import { PinnedMessage } from './PinnedMessage.js';
import { PollMessage } from './PollMessage.js';
import { PollOptionAddedMessage } from './PollOptionAddedMessage.js';
import { PollOptionDeletedMessage } from './PollOptionDeletedMessage.js';
import { ProximityAlertMessage } from './ProximityAlertMessage.js';
import { RefundedPaymentMessage } from './RefundedPaymentMessage.js';
import { RichBlocksMessage } from './RichBlocksMessage.js';
import { RichMessage } from './RichMessage.js';
import { StickerMessage } from './StickerMessage.js';
import { StoryMessage } from './StoryMessage.js';
import { SuccessfulPaymentMessage } from './SuccessfulPaymentMessage.js';
import { SuggestedPostApprovalFailedMessage } from './SuggestedPostApprovalFailedMessage.js';
import { SuggestedPostApprovedMessage } from './SuggestedPostApprovedMessage.js';
import { SuggestedPostDeclinedMessage } from './SuggestedPostDeclinedMessage.js';
import { SuggestedPostPaidMessage } from './SuggestedPostPaidMessage.js';
import { SuggestedPostRefundedMessage } from './SuggestedPostRefundedMessage.js';
import { SupergroupChatCreatedMessage } from './SupergroupChatCreatedMessage.js';
import { TextMessage } from './TextMessage.js';
import { TextQuote } from './TextQuote.js';
import { UniqueGiftMessage } from './UniqueGiftMessage.js';
import { UsersSharedMessage } from './UsersSharedMessage.js';
import { VenueMessage } from './VenueMessage.js';
import { VideoChatEndedMessage } from './VideoChatEndedMessage.js';
import { VideoChatParticipantsInvitedMessage } from './VideoChatParticipantsInvitedMessage.js';
import { VideoChatScheduledMessage } from './VideoChatScheduledMessage.js';
import { VideoChatStartedMessage } from './VideoChatStartedMessage.js';
import { VideoMessage } from './VideoMessage.js';
import { VideoNoteMessage } from './VideoNoteMessage.js';
import { VoiceMessage } from './VoiceMessage.js';
import { WebAppDataMessage } from './WebAppDataMessage.js';
import { WriteAccessAllowedMessage } from './WriteAccessAllowedMessage.js';
export * from './BaseMessage.js';
export * from './createMessage.js';
export * from './InaccessibleMessage.js';
export * from './createMaybeInaccessibleMessage.js';
export * from './ExternalReplyInfo.js';
export * from './TextQuote.js';
export * from './LinkPreviewOptions.js';
export * from './RichMessage.js';
export * from './TextMessage.js';
export * from './RichBlocksMessage.js';
export * from './AnimationMessage.js';
export * from './AudioMessage.js';
export * from './DocumentMessage.js';
export * from './LivePhotoMessage.js';
export * from './PaidMediaMessage.js';
export * from './PhotoMessage.js';
export * from './StickerMessage.js';
export * from './StoryMessage.js';
export * from './VideoMessage.js';
export * from './VideoNoteMessage.js';
export * from './VoiceMessage.js';
export * from './ChecklistMessage.js';
export * from './ContactMessage.js';
export * from './DiceMessage.js';
export * from './GameMessage.js';
export * from './PollMessage.js';
export * from './VenueMessage.js';
export * from './LocationMessage.js';
export * from './NewChatMembersMessage.js';
export * from './LeftChatMemberMessage.js';
export * from './ChatOwnerLeftMessage.js';
export * from './ChatOwnerChangedMessage.js';
export * from './NewChatTitleMessage.js';
export * from './NewChatPhotoMessage.js';
export * from './DeleteChatPhotoMessage.js';
export * from './GroupChatCreatedMessage.js';
export * from './SupergroupChatCreatedMessage.js';
export * from './ChannelChatCreatedMessage.js';
export * from './MessageAutoDeleteTimerChangedMessage.js';
export * from './MigrateToChatMessage.js';
export * from './MigrateFromChatMessage.js';
export * from './PinnedMessage.js';
export * from './InvoiceMessage.js';
export * from './SuccessfulPaymentMessage.js';
export * from './RefundedPaymentMessage.js';
export * from './UsersSharedMessage.js';
export * from './ChatSharedMessage.js';
export * from './GiftMessage.js';
export * from './UniqueGiftMessage.js';
export * from './GiftUpgradeSentMessage.js';
export * from './ConnectedWebsiteMessage.js';
export * from './WriteAccessAllowedMessage.js';
export * from './PassportMessage.js';
export * from './ProximityAlertMessage.js';
export * from './ChatBoostAddedMessage.js';
export * from './ChatBackgroundSetMessage.js';
export * from './ChecklistTasksDoneMessage.js';
export * from './ChecklistTasksAddedMessage.js';
export * from './CommunityChatAddedMessage.js';
export * from './CommunityChatJoinedMessage.js';
export * from './CommunityChatRemovedMessage.js';
export * from './DirectMessagePriceChangedMessage.js';
export * from './ForumTopicCreatedMessage.js';
export * from './ForumTopicEditedMessage.js';
export * from './ForumTopicClosedMessage.js';
export * from './ForumTopicReopenedMessage.js';
export * from './GeneralForumTopicHiddenMessage.js';
export * from './GeneralForumTopicUnhiddenMessage.js';
export * from './GiveawayCreatedMessage.js';
export * from './GiveawayMessage.js';
export * from './GiveawayWinnersMessage.js';
export * from './GiveawayCompletedMessage.js';
export * from './ManagedBotCreatedMessage.js';
export * from './PaidMessagePriceChangedMessage.js';
export * from './PollOptionAddedMessage.js';
export * from './PollOptionDeletedMessage.js';
export * from './SuggestedPostApprovedMessage.js';
export * from './SuggestedPostApprovalFailedMessage.js';
export * from './SuggestedPostDeclinedMessage.js';
export * from './SuggestedPostPaidMessage.js';
export * from './SuggestedPostRefundedMessage.js';
export * from './VideoChatScheduledMessage.js';
export * from './VideoChatStartedMessage.js';
export * from './VideoChatEndedMessage.js';
export * from './VideoChatParticipantsInvitedMessage.js';
export * from './WebAppDataMessage.js';
export * from './mixins/index.js';
export * from './content/index.js';
export * from './checklists/index.js';
export * from './formatting/index.js';
export * from './forums/index.js';
export * from './giveaways/index.js';
export * from './origins/index.js';
export * from './polls/index.js';
export * from './suggested-posts/index.js';
export * from './service/index.js';
export * from './video-chats/index.js';

declare module '../registry.js' {
	interface DefaultTypes {
		AnimationMessage: AnimationMessage;
		AudioMessage: AudioMessage;
		BaseMessage: BaseMessage;
		ChannelChatCreatedMessage: ChannelChatCreatedMessage;
		ChatBackgroundSetMessage: ChatBackgroundSetMessage;
		ChatBoostAddedMessage: ChatBoostAddedMessage;
		ChatOwnerChangedMessage: ChatOwnerChangedMessage;
		ChatOwnerLeftMessage: ChatOwnerLeftMessage;
		ChatSharedMessage: ChatSharedMessage;
		ChecklistMessage: ChecklistMessage;
		ChecklistTasksAddedMessage: ChecklistTasksAddedMessage;
		ChecklistTasksDoneMessage: ChecklistTasksDoneMessage;
		CommunityChatAddedMessage: CommunityChatAddedMessage;
		CommunityChatJoinedMessage: CommunityChatJoinedMessage;
		CommunityChatRemovedMessage: CommunityChatRemovedMessage;
		ConnectedWebsiteMessage: ConnectedWebsiteMessage;
		ContactMessage: ContactMessage;
		DeleteChatPhotoMessage: DeleteChatPhotoMessage;
		DiceMessage: DiceMessage;
		DirectMessagePriceChangedMessage: DirectMessagePriceChangedMessage;
		DocumentMessage: DocumentMessage;
		ExternalReplyInfo: ExternalReplyInfo;
		ForumTopicClosedMessage: ForumTopicClosedMessage;
		ForumTopicCreatedMessage: ForumTopicCreatedMessage;
		ForumTopicEditedMessage: ForumTopicEditedMessage;
		ForumTopicReopenedMessage: ForumTopicReopenedMessage;
		GameMessage: GameMessage;
		GeneralForumTopicHiddenMessage: GeneralForumTopicHiddenMessage;
		GeneralForumTopicUnhiddenMessage: GeneralForumTopicUnhiddenMessage;
		GiftMessage: GiftMessage;
		GiftUpgradeSentMessage: GiftUpgradeSentMessage;
		GiveawayCompletedMessage: GiveawayCompletedMessage;
		GiveawayCreatedMessage: GiveawayCreatedMessage;
		GiveawayMessage: GiveawayMessage;
		GiveawayWinnersMessage: GiveawayWinnersMessage;
		GroupChatCreatedMessage: GroupChatCreatedMessage;
		InaccessibleMessage: InaccessibleMessage;
		InvoiceMessage: InvoiceMessage;
		LeftChatMemberMessage: LeftChatMemberMessage;
		LinkPreviewOptions: LinkPreviewOptions;
		LivePhotoMessage: LivePhotoMessage;
		LocationMessage: LocationMessage;
		ManagedBotCreatedMessage: ManagedBotCreatedMessage;
		MessageAutoDeleteTimerChangedMessage: MessageAutoDeleteTimerChangedMessage;
		MigrateFromChatMessage: MigrateFromChatMessage;
		MigrateToChatMessage: MigrateToChatMessage;
		NewChatMembersMessage: NewChatMembersMessage;
		NewChatPhotoMessage: NewChatPhotoMessage;
		NewChatTitleMessage: NewChatTitleMessage;
		PaidMediaMessage: PaidMediaMessage;
		PaidMessagePriceChangedMessage: PaidMessagePriceChangedMessage;
		PassportMessage: PassportMessage;
		PhotoMessage: PhotoMessage;
		PinnedMessage: PinnedMessage;
		PollMessage: PollMessage;
		PollOptionAddedMessage: PollOptionAddedMessage;
		PollOptionDeletedMessage: PollOptionDeletedMessage;
		ProximityAlertMessage: ProximityAlertMessage;
		RefundedPaymentMessage: RefundedPaymentMessage;
		RichBlocksMessage: RichBlocksMessage;
		RichMessage: RichMessage;
		StickerMessage: StickerMessage;
		StoryMessage: StoryMessage;
		SuccessfulPaymentMessage: SuccessfulPaymentMessage;
		SuggestedPostApprovalFailedMessage: SuggestedPostApprovalFailedMessage;
		SuggestedPostApprovedMessage: SuggestedPostApprovedMessage;
		SuggestedPostDeclinedMessage: SuggestedPostDeclinedMessage;
		SuggestedPostPaidMessage: SuggestedPostPaidMessage;
		SuggestedPostRefundedMessage: SuggestedPostRefundedMessage;
		SupergroupChatCreatedMessage: SupergroupChatCreatedMessage;
		TextMessage: TextMessage;
		TextQuote: TextQuote;
		UniqueGiftMessage: UniqueGiftMessage;
		UsersSharedMessage: UsersSharedMessage;
		VenueMessage: VenueMessage;
		VideoChatEndedMessage: VideoChatEndedMessage;
		VideoChatParticipantsInvitedMessage: VideoChatParticipantsInvitedMessage;
		VideoChatScheduledMessage: VideoChatScheduledMessage;
		VideoChatStartedMessage: VideoChatStartedMessage;
		VideoMessage: VideoMessage;
		VideoNoteMessage: VideoNoteMessage;
		VoiceMessage: VoiceMessage;
		WebAppDataMessage: WebAppDataMessage;
		WriteAccessAllowedMessage: WriteAccessAllowedMessage;
	}
}

registerStructures({
	AnimationMessage,
	AudioMessage,
	BaseMessage,
	ChannelChatCreatedMessage,
	ChatBackgroundSetMessage,
	ChatBoostAddedMessage,
	ChatOwnerChangedMessage,
	ChatOwnerLeftMessage,
	ChatSharedMessage,
	ChecklistMessage,
	ChecklistTasksAddedMessage,
	ChecklistTasksDoneMessage,
	CommunityChatAddedMessage,
	CommunityChatJoinedMessage,
	CommunityChatRemovedMessage,
	ConnectedWebsiteMessage,
	ContactMessage,
	DeleteChatPhotoMessage,
	DiceMessage,
	DirectMessagePriceChangedMessage,
	DocumentMessage,
	ExternalReplyInfo,
	ForumTopicClosedMessage,
	ForumTopicCreatedMessage,
	ForumTopicEditedMessage,
	ForumTopicReopenedMessage,
	GameMessage,
	GeneralForumTopicHiddenMessage,
	GeneralForumTopicUnhiddenMessage,
	GiftMessage,
	GiftUpgradeSentMessage,
	GiveawayCompletedMessage,
	GiveawayCreatedMessage,
	GiveawayMessage,
	GiveawayWinnersMessage,
	GroupChatCreatedMessage,
	InaccessibleMessage,
	InvoiceMessage,
	LeftChatMemberMessage,
	LinkPreviewOptions,
	LivePhotoMessage,
	LocationMessage,
	ManagedBotCreatedMessage,
	MessageAutoDeleteTimerChangedMessage,
	MigrateFromChatMessage,
	MigrateToChatMessage,
	NewChatMembersMessage,
	NewChatPhotoMessage,
	NewChatTitleMessage,
	PaidMediaMessage,
	PaidMessagePriceChangedMessage,
	PassportMessage,
	PhotoMessage,
	PinnedMessage,
	PollMessage,
	PollOptionAddedMessage,
	PollOptionDeletedMessage,
	ProximityAlertMessage,
	RefundedPaymentMessage,
	RichBlocksMessage,
	RichMessage,
	StickerMessage,
	StoryMessage,
	SuccessfulPaymentMessage,
	SuggestedPostApprovalFailedMessage,
	SuggestedPostApprovedMessage,
	SuggestedPostDeclinedMessage,
	SuggestedPostPaidMessage,
	SuggestedPostRefundedMessage,
	SupergroupChatCreatedMessage,
	TextMessage,
	TextQuote,
	UniqueGiftMessage,
	UsersSharedMessage,
	VenueMessage,
	VideoChatEndedMessage,
	VideoChatParticipantsInvitedMessage,
	VideoChatScheduledMessage,
	VideoChatStartedMessage,
	VideoMessage,
	VideoNoteMessage,
	VoiceMessage,
	WebAppDataMessage,
	WriteAccessAllowedMessage,
});
