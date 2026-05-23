import { APIChat } from './chat.js';
import {
	APIAnimation,
	APIAudio,
	APIDocument,
	APILivePhoto,
	APIPaidMedia,
	APIPhotoSize,
	APISticker,
	APIVideo,
	APIVideoNote,
	APIVoice,
} from './media.js';
import { APIPassportData } from './passport.js';
import { APIInvoice, APIRefundedPayment, APISuccessfulPayment } from './payments.js';
import { APIUser } from './user.js';

export interface APIMessageId {
	message_id: number;
}

export type ReplyMessageFrom<Message extends APIMessage> = Omit<Message, 'reply_to_message'>;

export interface APIMessage extends APIMessageId {
	message_thread_id?: number;
	direct_messages_topic?: APIDirectMessagesTopic;
	from?: APIUser;
	sender_chat?: APIChat;
	sender_boost_count?: number;
	sender_business_bot?: APIUser;
	sender_tag?: string;
	date: number;
	guest_query_id?: string;
	business_connection_id?: string;
	chat: APIChat;
	forward_origin?: APIMessageOrigin;
	is_topic_message?: true;
	is_automatic_forward?: true;
	reply_to_message?: ReplyMessageFrom<APIMessage>;
	external_reply?: APIExternalReplyInfo;
	quote?: APITextQuote;
	reply_to_story?: APIStory;
	reply_to_checklist_task_id?: number;
	reply_to_poll_option_id?: string;
	via_bot?: APIUser;
	guest_bot_caller_user?: APIUser;
	guest_bot_caller_chat?: APIChat;
	edit_date?: number;
	has_protected_content?: true;
	is_from_offline?: true;
	is_paid_post?: true;
	media_group_id?: string;
	author_signature?: string;
	paid_star_count?: number;
	text?: string;
	entities?: APIMessageEntity[];
	link_preview_options?: APILinkPreviewOptions;
	suggested_post_info?: APISuggestedPostInfo;
	effect_id?: string;
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	live_photo?: APILivePhoto;
	paid_media?: APIPaidMedia;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	story?: APIStory;
	video?: APIVideo;
	video_note?: APIVideoNote;
	voice?: APIVoice;
	caption?: string;
	caption_entities?: APIMessageEntity[];
	show_caption_above_media?: true;
	has_media_spoiler?: true;
	checklist?: APIChecklist;
	contact?: APIContact;
	dice?: APIDice;
	game?: APIGame;
	poll?: APIPoll;
	venue?: APIVenue;
	location?: APILocation;
	new_chat_members?: APIUser[];
	left_chat_member?: APIUser;
	chat_owner_left?: APIChatOwnerLeft;
	chat_owner_changed?: APIChatOwnerChanged;
	new_chat_title?: string;
	new_chat_photo?: APIPhotoSize[];
	delete_chat_photo?: true;
	group_chat_created?: true;
	supergroup_chat_created?: true;
	channel_chat_created?: true;
	message_auto_delete_timer_changed?: APIMessageAutoDeleteTimerChanged;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: APIMaybeInaccessibleMessage;
	invoice?: APIInvoice;
	successful_payment?: APISuccessfulPayment;
	refunded_payment?: APIRefundedPayment;
	users_shared?: APIUsersShared;
	chat_shared?: APIChatShared;
	gift?: APIGiftInfo;
	unique_gift: APIUniqueGiftInfo;
	gift_upgrade_sent: APIGiftInfo;
	connected_website?: string;
	write_access_allowed?: APIWriteAccessAllowed;
	passport_data?: APIPassportData;
	proximity_alert_triggered?: APIProximityAlertTriggered;
	boost_added?: APIChatBoostAdded;
	chat_background_set?: APIChatBackground;
	checklist_tasks_done?: APIChecklistTasksDone;
	checklist_tasks_added?: APIChecklistTasksAdded;
	direct_message_price_changed: APIDirectMessagePriceChanged;
	forum_topic_created?: APIForumTopicCreated;
	forum_topic_edited?: APIForumTopicEdited;
	forum_topic_closed?: APIForumTopicClosed;
	forum_topic_reopened?: APIForumTopicReopened;
	general_forum_topic_hidden?: APIGeneralForumTopicHidden;
	general_forum_topic_unhidden?: APIGeneralForumTopicUnhidden;
	giveaway_created?: APIGiveawayCreated;
	giveaway?: APIGiveaway;
	giveaway_winners?: APIGiveawayWinners;
	giveaway_completed?: APIGiveawayCompleted;
	managed_bot_created?: APImanagedBotCreated;
	paid_message_price_changed?: APIPaidMessagePriceChanged;
	poll_option_added?: APIPollOptionAdded;
	poll_option_deleted?: APIPollOptionDeleted;
	suggested_post_approved?: APISuggestedPostApproved;
	suggested_post_approval_failed?: APISuggestedPostApprovalFailed;
	suggested_post_declined?: APISuggestedPostDeclined;
	suggested_post_paid?: APISuggestedPostPaid;
	suggested_post_refunded?: APISuggestedPostRefunded;
	video_chat_scheduled?: APIVideoChatScheduled;
	video_chat_started?: APIVideoChatStarted;
	video_chat_ended?: APIVideoChatEnded;
	video_chat_participants_invited?: APIVideoChatParticipantsInvited;
	web_app_data?: APIWebAppData;
	reply_markup?: APIInlineKeyboardMarkup;
}

export interface APIDirectMessagesTopic {}

export interface APIMessageOrigin {}

export interface APIExternalReplyInfo {}

export interface APITextQuote {}

export interface APIStory {}

export interface APIMessageEntity {}

export interface APILinkPreviewOptions {}

export interface APISuggestedPostInfo {}

export interface APIChecklist {}

export interface APIContact {}

export interface APIDice {}

export interface APIGame {}

export interface APIPoll {}

export interface APIVenue {}

export interface APILocation {}

export interface APIChatOwnerLeft {}

export interface APIChatOwnerChanged {}

export interface APIMessageAutoDeleteTimerChanged {}

export interface APIUsersShared {}

export interface APIChatShared {}

export interface APIUniqueGiftInfo {}

export interface APIGiftInfo {}

export interface APIWriteAccessAllowed {}

export interface APIProximityAlertTriggered {}

export interface APIChatBoostAdded {}

export interface APIChatBackground {}

export interface APIChecklistTasksDone {}

export interface APIChecklistTasksAdded {}

export interface APIDirectMessagePriceChanged {}

export interface APIForumTopicCreated {}

export interface APIForumTopicEdited {}

export interface APIForumTopicClosed {}

export interface APIForumTopicReopened {}

export interface APIGeneralForumTopicHidden {}

export interface APIGeneralForumTopicUnhidden {}

export interface APIGiveawayCreated {}

export interface APIGiveaway {}

export interface APIGiveawayWinners {}

export interface APIGiveawayCompleted {}

export interface APImanagedBotCreated {}

export interface APIPaidMessagePriceChanged {}

export interface APIPollOptionAdded {}

export interface APIPollOptionDeleted {}

export interface APISuggestedPostApproved {}

export interface APISuggestedPostApprovalFailed {}

export interface APISuggestedPostDeclined {}

export interface APISuggestedPostPaid {}

export interface APISuggestedPostRefunded {}

export interface APIVideoChatScheduled {}

export interface APIVideoChatStarted {}

export interface APIVideoChatEnded {}

export interface APIVideoChatParticipantsInvited {}

export interface APIWebAppData {}

export interface APIInlineKeyboardMarkup {}

export interface APIInaccessibleMessage extends APIMessageId {
	chat: APIChat;
	date: 0;
}

export type APIMaybeInaccessibleMessage = APIMessage | APIInaccessibleMessage;
