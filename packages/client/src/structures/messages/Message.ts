import { Message as ParentMessage, Structure } from '@telescript/structures';
import { DirectMessagesTopic } from './DirectMessagesTopic.js';
import { Client } from '../../client/index.js';
import { APIMessage } from '@telescript/api-types';
import { createMessageOrigin } from './origins/index.js';
import { Checklist } from './Checklist.js';
import { Contact } from './Contact.js';
import { Dice } from './Dice.js';
import { ExternalReplyInfo } from './ExternalReplyInfo.js';
import { Game } from './Game.js';
import { Giveaway } from './Giveaway.js';
import { GiveawayWinners } from './GiveawayWinners.js';
import { Invoice } from './Invoice.js';
import { LinkPreviewOptions } from './LinkPreviewOptions.js';
import { Location } from './Location.js';
import { Poll } from './Poll.js';
import { RefundedPayment } from './RefundedPayment.js';
import { RichMessage } from './RichMessage.js';
import { Story } from './Story.js';
import { SuccessfulPayment } from './SuccessfulPayment.js';
import { Venue } from './Venue.js';
import { CommunityChatAdded } from './CommunityChatAdded.js';
import { CommunityChatRemoved } from './CommunityChatRemoved.js';
import { createMessageEntity } from './entity/index.js';
import { GiftInfo } from './GiftInfo.js';
import { UniqueGiftInfo } from './UniqueGiftInfo.js';
import {
	Animation,
	Audio,
	Document,
	LivePhoto,
	PaidMediaInfo,
	PhotoSize,
	Sticker,
	Video,
	VideoNote,
	Voice,
} from '../media/index.js';

export class Message extends ParentMessage {
	public constructor(
		public client: Client,
		data: APIMessage,
	) {
		super(data);
	}

	public get directMessagesTopic() {
		const data = this[Structure.DataProperty].direct_messages_topic;
		return data ? new DirectMessagesTopic(this.client, data) : null;
	}

	public get from() {
		const data = this[Structure.DataProperty].from;
		return data ? this.client.users.resolve(data) : null;
	}

	public get senderChat() {
		const data = this[Structure.DataProperty].sender_chat;
		return data ? this.client.chats.resolve(data) : null;
	}

	public get senderBusinessBot() {
		const data = this[Structure.DataProperty].sender_business_bot;
		return data ? this.client.users.resolve(data) : null;
	}

	public get receiverUser() {
		const data = this[Structure.DataProperty].receiver_user;
		return data ? this.client.users.resolve(data) : null;
	}

	public get chat() {
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}

	public get forwardOrigin() {
		const data = this[Structure.DataProperty].forward_origin;
		return data ? createMessageOrigin(this.client, data) : null;
	}

	public get replyToMessage(): Message | null {
		const data = this[Structure.DataProperty].reply_to_message;
		return data ? this.client.messages.resolve(data) : null;
	}

	public get guestBotCallerUser() {
		const data = this[Structure.DataProperty].guest_bot_caller_user;
		return data ? this.client.users.resolve(data) : null;
	}

	public get guestBotCallerChat() {
		const data = this[Structure.DataProperty].guest_bot_caller_chat;
		return data ? this.client.chats.resolve(data) : null;
	}

	public get pinnedMessage(): Message | null {
		const data = this[Structure.DataProperty].pinned_message;
		return data ? this.client.messages.resolve(data as APIMessage) : null;
	}

	public get leftChatMember() {
		const data = this[Structure.DataProperty].left_chat_member;
		return data ? this.client.users.resolve(data) : null;
	}

	public get newChatMembers() {
		const data = this[Structure.DataProperty].new_chat_members;
		return data ? data.map((member) => this.client.users.resolve(member)) : null;
	}

	public get externalReply() {
		const data = this[Structure.DataProperty].external_reply;
		return data ? new ExternalReplyInfo(this.client, data) : null;
	}

	public get replyToStory() {
		const data = this[Structure.DataProperty].reply_to_story;
		return data ? new Story(this.client, data) : null;
	}

	public get animation() {
		const data = this[Structure.DataProperty].animation;
		return data ? new Animation(this.client, data) : null;
	}

	public get audio() {
		const data = this[Structure.DataProperty].audio;
		return data ? new Audio(this.client, data) : null;
	}

	public get document() {
		const data = this[Structure.DataProperty].document;
		return data ? new Document(this.client, data) : null;
	}

	public get livePhoto() {
		const data = this[Structure.DataProperty].live_photo;
		return data ? new LivePhoto(this.client, data) : null;
	}

	public get paidMedia() {
		const data = this[Structure.DataProperty].paid_media;
		return data ? new PaidMediaInfo(this.client, data) : null;
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => new PhotoSize(this.client, item)) : null;
	}

	public get sticker() {
		const data = this[Structure.DataProperty].sticker;
		return data ? new Sticker(this.client, data) : null;
	}

	public get story() {
		const data = this[Structure.DataProperty].story;
		return data ? new Story(this.client, data) : null;
	}

	public get video() {
		const data = this[Structure.DataProperty].video;
		return data ? new Video(this.client, data) : null;
	}

	public get videoNote() {
		const data = this[Structure.DataProperty].video_note;
		return data ? new VideoNote(this.client, data) : null;
	}

	public get voice() {
		const data = this[Structure.DataProperty].voice;
		return data ? new Voice(this.client, data) : null;
	}

	public get checklist() {
		const data = this[Structure.DataProperty].checklist;
		return data ? new Checklist(this.client, data) : null;
	}

	public get contact() {
		const data = this[Structure.DataProperty].contact;
		return data ? new Contact(this.client, data) : null;
	}

	public get dice() {
		const data = this[Structure.DataProperty].dice;
		return data ? new Dice(this.client, data) : null;
	}

	public get game() {
		const data = this[Structure.DataProperty].game;
		return data ? new Game(this.client, data) : null;
	}

	public get poll() {
		const data = this[Structure.DataProperty].poll;
		return data ? new Poll(this.client, data) : null;
	}

	public get venue() {
		const data = this[Structure.DataProperty].venue;
		return data ? new Venue(this.client, data) : null;
	}

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(this.client, data) : null;
	}

	public get newChatPhoto() {
		const data = this[Structure.DataProperty].new_chat_photo;
		return data ? data.map((item) => new PhotoSize(this.client, item)) : null;
	}

	public get invoice() {
		const data = this[Structure.DataProperty].invoice;
		return data ? new Invoice(this.client, data) : null;
	}

	public get successfulPayment() {
		const data = this[Structure.DataProperty].successful_payment;
		return data ? new SuccessfulPayment(this.client, data) : null;
	}

	public get refundedPayment() {
		const data = this[Structure.DataProperty].refunded_payment;
		return data ? new RefundedPayment(this.client, data) : null;
	}

	public get communityChatAdded() {
		const data = this[Structure.DataProperty].community_chat_added;
		return data ? new CommunityChatAdded(this.client, data) : null;
	}

	public get communityChatRemoved() {
		const data = this[Structure.DataProperty].community_chat_removed;
		return data ? new CommunityChatRemoved(this.client, data) : null;
	}

	public get giveaway() {
		const data = this[Structure.DataProperty].giveaway;
		return data ? new Giveaway(this.client, data) : null;
	}

	public get giveawayWinners() {
		const data = this[Structure.DataProperty].giveaway_winners;
		return data ? new GiveawayWinners(this.client, data) : null;
	}

	public get richMessage() {
		const data = this[Structure.DataProperty].rich_message;
		return data ? new RichMessage(this.client, data) : null;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(this.client, entity, this.text ?? '')) : null;
	}

	public get captionEntities() {
		const data = this[Structure.DataProperty].caption_entities;
		return data ? data.map((entity) => createMessageEntity(this.client, entity, this.caption!)) : null;
	}

	public get linkPreviewOptions() {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? new LinkPreviewOptions(this.client, data) : null;
	}

	public get gift() {
		const data = this[Structure.DataProperty].gift;
		return data ? new GiftInfo(this.client, data) : null;
	}

	public get uniqueGift() {
		const data = this[Structure.DataProperty].unique_gift;
		return data ? new UniqueGiftInfo(this.client, data) : null;
	}

	public get giftUpgradeSent() {
		const data = this[Structure.DataProperty].gift_upgrade_sent;
		return data ? new GiftInfo(this.client, data) : null;
	}
}
