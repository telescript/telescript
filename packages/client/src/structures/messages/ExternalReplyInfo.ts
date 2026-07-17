import { ExternalReplyInfo as ParentExternalReplyInfo, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIExternalReplyInfo } from '@telescript/api-types';
import { createMessageOrigin } from './origins/index.js';
import { LinkPreviewOptions } from './LinkPreviewOptions.js';
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
import { Story } from './Story.js';
import { Checklist } from './Checklist.js';
import { Contact } from './Contact.js';
import { Dice } from './Dice.js';
import { Game } from './Game.js';
import { Giveaway } from './Giveaway.js';
import { GiveawayWinners } from './GiveawayWinners.js';
import { Invoice } from './Invoice.js';
import { Location } from './Location.js';

export interface ExternalReplyInfo extends ParentExternalReplyInfo {}

export class ExternalReplyInfo extends ParentExternalReplyInfo {
	public constructor(
		public client: Client,
		data: APIExternalReplyInfo,
	) {
		super(data);
	}

	public get origin() {
		return createMessageOrigin(this.client, this[Structure.DataProperty].origin);
	}

	public get chat() {
		const data = this[Structure.DataProperty].chat;
		return data ? this.client.chats.resolve(data) : null;
	}

	public get linkPreviewOptions() {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? new LinkPreviewOptions(this.client, data) : null;
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

	public get giveaway() {
		const data = this[Structure.DataProperty].giveaway;
		return data ? new Giveaway(this.client, data) : null;
	}

	public get giveaway_winners() {
		const data = this[Structure.DataProperty].giveaway_winners;
		return data ? new GiveawayWinners(this.client, data) : null;
	}

	public get invoice() {
		const data = this[Structure.DataProperty].invoice;
		return data ? new Invoice(this.client, data) : null;
	}

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(this.client, data) : null;
	}
}
