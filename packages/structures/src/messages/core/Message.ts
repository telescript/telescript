import { APIMessage } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { DirectMessagesTopic } from '../forums/DirectMessagesTopic.js';
import { User } from '../../users/index.js';
import { createChat } from '../../chats/index.js';
import { createMessageOrigin } from '../origins/index.js';
import { createMessageEntity } from '../entities/index.js';
import { ExternalReplyInfo } from './ExternalReplyInfo.js';
import { Story } from './Story.js';
import { Checklist } from '../checklists/Checklist.js';
import { Contact } from '../types/Contact.js';
import { Dice } from '../types/Dice.js';
import { Game } from '../types/Game.js';
import { Poll } from '../polls/Poll.js';
import { Venue } from '../types/Venue.js';
import { Location } from '../types/Location.js';
import { Animation } from '../../media/Animation.js';
import { Audio } from '../../media/Audio.js';
import { Document } from '../../media/Document.js';
import { LivePhoto } from '../../media/LivePhoto.js';
import { PaidMediaInfo } from '../../media/PaidMediaInfo.js';
import { PhotoSize } from '../../media/PhotoSize.js';
import { Sticker, Video, VideoNote, Voice } from '../../media/index.js';
import { LinkPreviewOptions } from './LinkPreviewOptions.js';
import { Invoice } from '../payments/Invoice.js';
import { SuccessfulPayment } from '../payments/SuccessfulPayment.js';
import { RefundedPayment } from '../payments/RefundedPayment.js';
import { Giveaway } from '../giveaways/Giveaway.js';
import { GiveawayWinners } from '../giveaways/GiveawayWinners.js';
import { RichMessage } from './RichMessage.js';
import { CommunityChatAdded } from '../updates/CommunityChatAdded.js';
import { CommunityChatRemoved } from '../updates/CommunityChatRemoved.js';
import { GiftInfo } from '../gifts/GiftInfo.js';
import { UniqueGiftInfo } from '../gifts/UniqueGiftInfo.js';
import { SuggestedPostInfo } from '../suggested-posts/SuggestedPostInfo.js';
import { ChatOwnerLeft } from '../updates/ChatOwnerLeft.js';
import { ChatOwnerChanged } from '../updates/ChatOwnerChanged.js';
import { MessageAutoDeleteTimerChanged } from '../updates/MessageAutoDeleteTimerChanged.js';
import { UsersShared } from '../updates/UsersShared.js';
import { ChatShared } from '../updates/ChatShared.js';
import { WriteAccessAllowed } from '../updates/WriteAccessAllowed.js';
import { PassportData } from '../types/PassportData.js';
import { ProximityAlertTriggered } from '../updates/ProximityAlertTriggered.js';
import { ChatBoostAdded } from '../updates/ChatBoostAdded.js';
import { ChatBackground } from '../updates/ChatBackground.js';
import { ChecklistTasksDone } from '../checklists/ChecklistTasksDone.js';
import { ChecklistTasksAdded } from '../checklists/ChecklistTasksAdded.js';
import { DirectMessagePriceChanged } from '../updates/DirectMessagePriceChanged.js';
import { ForumTopicCreated } from '../forums/ForumTopicCreated.js';
import { ForumTopicEdited } from '../forums/ForumTopicEdited.js';
import { ForumTopicClosed } from '../forums/ForumTopicClosed.js';
import { ForumTopicReopened } from '../forums/ForumTopicReopened.js';
import { GeneralForumTopicHidden } from '../forums/GeneralForumTopicHidden.js';
import { GeneralForumTopicUnhidden } from '../forums/GeneralForumTopicUnhidden.js';
import { GiveawayCreated } from '../giveaways/GiveawayCreated.js';
import { GiveawayCompleted } from '../giveaways/GiveawayCompleted.js';
import { ManagedBotCreated } from '../updates/ManagedBotCreated.js';
import { PaidMessagePriceChanged } from '../payments/PaidMessagePriceChanged.js';
import { PollOptionAdded } from '../polls/PollOptionAdded.js';
import { PollOptionDeleted } from '../polls/PollOptionDeleted.js';
import { SuggestedPostApproved } from '../suggested-posts/SuggestedPostApproved.js';
import { SuggestedPostApprovalFailed } from '../suggested-posts/SuggestedPostApprovalFailed.js';
import { SuggestedPostDeclined } from '../suggested-posts/SuggestedPostDeclined.js';
import { SuggestedPostPaid } from '../suggested-posts/SuggestedPostPaid.js';
import { SuggestedPostRefunded } from '../suggested-posts/SuggestedPostRefunded.js';
import { VideoChatScheduled } from '../video-chats/VideoChatScheduled.js';
import { VideoChatStarted } from '../video-chats/VideoChatStarted.js';
import { VideoChatEnded } from '../video-chats/VideoChatEnded.js';
import { VideoChatParticipantsInvited } from '../video-chats/VideoChatParticipantsInvited.js';
import { WebAppData } from '../updates/WebAppData.js';
import { TextQuote } from './TextQuote.js';

export class Message extends Structure<APIMessage> {
	public get id() {
		return this[Structure.DataProperty].message_id;
	}

	public get threadId() {
		return this[Structure.DataProperty].message_thread_id ?? null;
	}

	public get directMessagesTopic() {
		const data = this[Structure.DataProperty].direct_messages_topic;
		return data ? new DirectMessagesTopic(data) : null;
	}

	public get from() {
		const data = this[Structure.DataProperty].from;
		return data ? new User(data) : null;
	}

	public get senderChat() {
		const data = this[Structure.DataProperty].sender_chat;
		return data ? createChat(data) : null;
	}

	public get senderBoostCount() {
		return this[Structure.DataProperty].sender_boost_count ?? null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? new User(data) : null;
	}

	public get senderTag() {
		return this[Structure.DataProperty].sender_tag ?? null;
	}

	public get receiverUser() {
		const data = this[Structure.DataProperty].receiver_user;
		return data ? new User(data) : null;
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
		return createChat(this[Structure.DataProperty].chat);
	}

	public get forwardOrigin() {
		const data = this[Structure.DataProperty].forward_origin;
		return data ? createMessageOrigin(data) : null;
	}

	public get isTopicMessage() {
		return this[Structure.DataProperty].is_topic_message ?? false;
	}

	public get isAutomaticForward() {
		return this[Structure.DataProperty].is_automatic_forward ?? null;
	}

	public get replyToMessage(): Message | null {
		const data = this[Structure.DataProperty].reply_to_message;
		return data ? new Message(data) : null;
	}

	public get externalReply() {
		const data = this[Structure.DataProperty].external_reply;
		return data ? new ExternalReplyInfo(data) : null;
	}

	public get quote() {
		const data = this[Structure.DataProperty].quote;
		return data ? new TextQuote(data) : null;
	}

	public get replyToStory() {
		const data = this[Structure.DataProperty].reply_to_story;
		return data ? new Story(data) : null;
	}

	public get replyToChecklistTaskId() {
		return this[Structure.DataProperty].reply_to_checklist_task_id ?? null;
	}

	public get replyToPollOptionId() {
		return this[Structure.DataProperty].reply_to_poll_option_id ?? null;
	}

	public get viaBot() {
		const data = this[Structure.DataProperty].via_bot;
		return data ? new User(data) : null;
	}

	public get guestBotCallerUser() {
		const data = this[Structure.DataProperty].guest_bot_caller_user;
		return data ? new User(data) : null;
	}

	public get guestBotCallerChat() {
		const data = this[Structure.DataProperty].guest_bot_caller_chat;
		return data ? createChat(data) : null;
	}

	public get editUnixTimestamp() {
		return this[Structure.DataProperty].edit_date ?? null;
	}

	public get editTimestamp() {
		const ts = this[Structure.DataProperty].edit_date;
		return ts ? ts * 1000 : null;
	}

	public get editDate() {
		const ts = this[Structure.DataProperty].edit_date;
		return ts ? new Date(ts * 1000) : null;
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

	public get mediaGroupId() {
		return this[Structure.DataProperty].media_group_id ?? null;
	}

	public get authorSignature() {
		return this[Structure.DataProperty].author_signature ?? null;
	}

	public get paidStarCount() {
		return this[Structure.DataProperty].paid_star_count ?? null;
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text ?? '')) : null;
	}

	public get linkPreviewOptions() {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? new LinkPreviewOptions(data) : null;
	}

	public get suggestedPostInfo() {
		const data = this[Structure.DataProperty].suggested_post_info;
		return data ? new SuggestedPostInfo(data) : null;
	}

	public get effectId() {
		return this[Structure.DataProperty].effect_id ?? null;
	}

	public get richMessage() {
		const data = this[Structure.DataProperty].rich_message;
		return data ? new RichMessage(data) : null;
	}

	public get animation() {
		const data = this[Structure.DataProperty].animation;
		return data ? new Animation(data) : null;
	}

	public get audio() {
		const data = this[Structure.DataProperty].audio;
		return data ? new Audio(data) : null;
	}

	public get document() {
		const data = this[Structure.DataProperty].document;
		return data ? new Document(data) : null;
	}

	public get livePhoto() {
		const data = this[Structure.DataProperty].live_photo;
		return data ? new LivePhoto(data) : null;
	}

	public get paidMedia() {
		const data = this[Structure.DataProperty].paid_media;
		return data ? new PaidMediaInfo(data) : null;
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => new PhotoSize(item)) : null;
	}

	public get sticker() {
		const data = this[Structure.DataProperty].sticker;
		return data ? new Sticker(data) : null;
	}

	public get story() {
		const data = this[Structure.DataProperty].story;
		return data ? new Story(data) : null;
	}

	public get video() {
		const data = this[Structure.DataProperty].video;
		return data ? new Video(data) : null;
	}

	public get videoNote() {
		const data = this[Structure.DataProperty].video_note;
		return data ? new VideoNote(data) : null;
	}

	public get voice() {
		const data = this[Structure.DataProperty].voice;
		return data ? new Voice(data) : null;
	}

	public get caption() {
		return this[Structure.DataProperty].caption ?? null;
	}

	public get captionEntities() {
		const data = this[Structure.DataProperty].caption_entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.caption!)) : null;
	}

	public get showCaptionAboveMedia() {
		return this[Structure.DataProperty].show_caption_above_media ?? null;
	}

	public get hasMediaSpoiler() {
		return this[Structure.DataProperty].has_media_spoiler ?? null;
	}

	public get checklist() {
		const data = this[Structure.DataProperty].checklist;
		return data ? new Checklist(data) : null;
	}

	public get contact() {
		const data = this[Structure.DataProperty].contact;
		return data ? new Contact(data) : null;
	}

	public get dice() {
		const data = this[Structure.DataProperty].dice;
		return data ? new Dice(data) : null;
	}

	public get game() {
		const data = this[Structure.DataProperty].game;
		return data ? new Game(data) : null;
	}

	public get poll() {
		const data = this[Structure.DataProperty].poll;
		return data ? new Poll(data) : null;
	}

	public get venue() {
		const data = this[Structure.DataProperty].venue;
		return data ? new Venue(data) : null;
	}

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(data) : null;
	}

	public get newChatMembers() {
		const data = this[Structure.DataProperty].new_chat_members;
		return data ? data.map((member) => new User(member)) : null;
	}

	public get leftChatMember() {
		const data = this[Structure.DataProperty].left_chat_member;
		return data ? new User(data) : null;
	}

	public get chatOwnerLeft() {
		const data = this[Structure.DataProperty].chat_owner_left;
		return data ? new ChatOwnerLeft(data) : null;
	}

	public get chatOwnerChanged() {
		const data = this[Structure.DataProperty].chat_owner_changed;
		return data ? new ChatOwnerChanged(data) : null;
	}

	public get newChatTitle() {
		return this[Structure.DataProperty].new_chat_title ?? null;
	}

	public get newChatPhoto() {
		const data = this[Structure.DataProperty].new_chat_photo;
		return data ? data.map((item) => new PhotoSize(item)) : null;
	}

	public get deleteChatPhoto() {
		return this[Structure.DataProperty].delete_chat_photo ?? null;
	}

	public get groupChatCreated() {
		return this[Structure.DataProperty].group_chat_created ?? null;
	}

	public get supergroupChatCreated() {
		return this[Structure.DataProperty].supergroup_chat_created ?? null;
	}

	public get channelChatCreated() {
		return this[Structure.DataProperty].channel_chat_created ?? null;
	}

	public get messageAutoDeleteTimerChanged() {
		const data = this[Structure.DataProperty].message_auto_delete_timer_changed;
		return data ? new MessageAutoDeleteTimerChanged(data) : null;
	}

	public get migrateToChatId() {
		return this[Structure.DataProperty].migrate_to_chat_id ?? null;
	}

	public get migrateFromChatId() {
		return this[Structure.DataProperty].migrate_from_chat_id ?? null;
	}

	public get pinnedMessage(): Message | null {
		const data = this[Structure.DataProperty].pinned_message;
		return data ? new Message(data as APIMessage) : null;
	}

	public get invoice() {
		const data = this[Structure.DataProperty].invoice;
		return data ? new Invoice(data) : null;
	}

	public get successfulPayment() {
		const data = this[Structure.DataProperty].successful_payment;
		return data ? new SuccessfulPayment(data) : null;
	}

	public get refundedPayment() {
		const data = this[Structure.DataProperty].refunded_payment;
		return data ? new RefundedPayment(data) : null;
	}

	public get usersShared() {
		const data = this[Structure.DataProperty].users_shared;
		return data ? new UsersShared(data) : null;
	}

	public get chatShared() {
		const data = this[Structure.DataProperty].chat_shared;
		return data ? new ChatShared(data) : null;
	}

	public get gift() {
		const data = this[Structure.DataProperty].gift;
		return data ? new GiftInfo(data) : null;
	}

	public get uniqueGift() {
		const data = this[Structure.DataProperty].unique_gift;
		return data ? new UniqueGiftInfo(data) : null;
	}

	public get giftUpgradeSent() {
		const data = this[Structure.DataProperty].gift_upgrade_sent;
		return data ? new GiftInfo(data) : null;
	}

	public get connectedWebsite() {
		return this[Structure.DataProperty].connected_website ?? null;
	}

	public get writeAccessAllowed() {
		const data = this[Structure.DataProperty].write_access_allowed;
		return data ? new WriteAccessAllowed(data) : null;
	}

	public get passportData() {
		const data = this[Structure.DataProperty].passport_data;
		return data ? new PassportData(data) : null;
	}

	public get proximityAlertTriggered() {
		const data = this[Structure.DataProperty].proximity_alert_triggered;
		return data ? new ProximityAlertTriggered(data) : null;
	}

	public get boostAdded() {
		const data = this[Structure.DataProperty].boost_added;
		return data ? new ChatBoostAdded(data) : null;
	}

	public get chatBackgroundSet() {
		const data = this[Structure.DataProperty].chat_background_set;
		return data ? new ChatBackground(data) : null;
	}

	public get checklistTasksDone() {
		const data = this[Structure.DataProperty].checklist_tasks_done;
		return data ? new ChecklistTasksDone(data) : null;
	}

	public get checklistTasksAdded() {
		const data = this[Structure.DataProperty].checklist_tasks_added;
		return data ? new ChecklistTasksAdded(data) : null;
	}

	public get communityChatAdded() {
		const data = this[Structure.DataProperty].community_chat_added;
		return data ? new CommunityChatAdded(data) : null;
	}

	public get communityChatRemoved() {
		const data = this[Structure.DataProperty].community_chat_removed;
		return data ? new CommunityChatRemoved(data) : null;
	}

	public get directMessagePriceChanged() {
		const data = this[Structure.DataProperty].direct_message_price_changed;
		return data ? new DirectMessagePriceChanged(data) : null;
	}

	public get forumTopicCreated() {
		const data = this[Structure.DataProperty].forum_topic_created;
		return data ? new ForumTopicCreated(data) : null;
	}

	public get forumTopicEdited() {
		const data = this[Structure.DataProperty].forum_topic_edited;
		return data ? new ForumTopicEdited(data) : null;
	}

	public get forumTopicClosed() {
		const data = this[Structure.DataProperty].forum_topic_closed;
		return data ? new ForumTopicClosed(data) : null;
	}

	public get forumTopicReopened() {
		const data = this[Structure.DataProperty].forum_topic_reopened;
		return data ? new ForumTopicReopened(data) : null;
	}

	public get generalForumTopicHidden() {
		const data = this[Structure.DataProperty].general_forum_topic_hidden;
		return data ? new GeneralForumTopicHidden(data) : null;
	}

	public get generalForumTopicUnhidden() {
		const data = this[Structure.DataProperty].general_forum_topic_unhidden;
		return data ? new GeneralForumTopicUnhidden(data) : null;
	}

	public get giveawayCreated() {
		const data = this[Structure.DataProperty].giveaway_created;
		return data ? new GiveawayCreated(data) : null;
	}

	public get giveaway() {
		const data = this[Structure.DataProperty].giveaway;
		return data ? new Giveaway(data) : null;
	}

	public get giveawayWinners() {
		const data = this[Structure.DataProperty].giveaway_winners;
		return data ? new GiveawayWinners(data) : null;
	}

	public get giveawayCompleted() {
		const data = this[Structure.DataProperty].giveaway_completed;
		return data ? new GiveawayCompleted(data) : null;
	}

	public get managedBotCreated() {
		const data = this[Structure.DataProperty].managed_bot_created;
		return data ? new ManagedBotCreated(data) : null;
	}

	public get paidMessagePriceChanged() {
		const data = this[Structure.DataProperty].paid_message_price_changed;
		return data ? new PaidMessagePriceChanged(data) : null;
	}

	public get pollOptionAdded() {
		const data = this[Structure.DataProperty].poll_option_added;
		return data ? new PollOptionAdded(data) : null;
	}

	public get pollOptionDeleted() {
		const data = this[Structure.DataProperty].poll_option_deleted;
		return data ? new PollOptionDeleted(data) : null;
	}

	public get suggestedPostApproved() {
		const data = this[Structure.DataProperty].suggested_post_approved;
		return data ? new SuggestedPostApproved(data) : null;
	}

	public get suggestedPostApprovalFailed() {
		const data = this[Structure.DataProperty].suggested_post_approval_failed;
		return data ? new SuggestedPostApprovalFailed(data) : null;
	}

	public get suggestedPostDeclined() {
		const data = this[Structure.DataProperty].suggested_post_declined;
		return data ? new SuggestedPostDeclined(data) : null;
	}

	public get suggestedPostPaid() {
		const data = this[Structure.DataProperty].suggested_post_paid;
		return data ? new SuggestedPostPaid(data) : null;
	}

	public get suggestedPostRefunded() {
		const data = this[Structure.DataProperty].suggested_post_refunded;
		return data ? new SuggestedPostRefunded(data) : null;
	}

	public get videoChatScheduled() {
		const data = this[Structure.DataProperty].video_chat_scheduled;
		return data ? new VideoChatScheduled(data) : null;
	}

	public get videoChatStarted() {
		const data = this[Structure.DataProperty].video_chat_started;
		return data ? new VideoChatStarted(data) : null;
	}

	public get videoChatEnded() {
		const data = this[Structure.DataProperty].video_chat_ended;
		return data ? new VideoChatEnded(data) : null;
	}

	public get videoChatParticipantsInvited() {
		const data = this[Structure.DataProperty].video_chat_participants_invited;
		return data ? new VideoChatParticipantsInvited(data) : null;
	}

	public get webAppData() {
		const data = this[Structure.DataProperty].web_app_data;
		return data ? new WebAppData(data) : null;
	}

	public get replyMarkup() {
		return this[Structure.DataProperty].reply_markup ?? null;
	}
}
