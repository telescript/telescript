import { APIExternalReplyInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageOrigin } from './origins/index.js';
import { createChat } from '../chats/index.js';
import { LinkPreviewOptions } from './LinkPreviewOptions.js';
import { Animation } from '../media/Animation.js';
import { Audio } from '../media/Audio.js';
import { Document } from '../media/Document.js';
import { LivePhoto } from '../media/LivePhoto.js';
import { PaidMediaInfo } from '../media/PaidMediaInfo.js';
import { PhotoSize } from '../media/PhotoSize.js';
import { Sticker, Video, VideoNote, Voice } from '../media/index.js';
import { Story } from './Story.js';
import { Checklist } from './Checklist.js';
import { Contact } from './Contact.js';
import { Dice } from './Dice.js';
import { Game } from './Game.js';
import { Giveaway } from './Giveaway.js';
import { GiveawayWinners } from './GiveawayWinners.js';
import { Location } from './Location.js';
import { Invoice } from './Invoice.js';

export class ExternalReplyInfo extends Structure<APIExternalReplyInfo> {
	public get origin() {
		return createMessageOrigin(this[Structure.DataProperty].origin);
	}

	public get chat() {
		const data = this[Structure.DataProperty].chat;
		return data ? createChat(data) : null;
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id ?? null;
	}

	public get linkPreviewOptions() {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? new LinkPreviewOptions(data) : null;
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
		return data ? data.map((data) => new PhotoSize(data)) : null;
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

	public get giveaway() {
		const data = this[Structure.DataProperty].giveaway;
		return data ? new Giveaway(data) : null;
	}

	public get giveaway_winners() {
		const data = this[Structure.DataProperty].giveaway_winners;
		return data ? new GiveawayWinners(data) : null;
	}

	public get invoice() {
		const data = this[Structure.DataProperty].invoice;
		return data ? new Invoice(data) : null;
	}

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(data) : null;
	}
}
