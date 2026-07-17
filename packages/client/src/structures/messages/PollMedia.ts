import { PollMedia as ParentPollMedia, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIPollMedia } from '@telescript/api-types';
import { Animation, Audio, Document, LivePhoto, PhotoSize, Sticker, Video } from '../media/index.js';
import { Location } from './Location.js';
import { Venue } from './Venue.js';

export interface PollMedia extends ParentPollMedia {}

export class PollMedia extends ParentPollMedia {
	public constructor(
		public client: Client,
		data: APIPollMedia,
	) {
		super(data);
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

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(this.client, data) : null;
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => new PhotoSize(this.client, item)) : null;
	}

	public get sticker() {
		const data = this[Structure.DataProperty].sticker;
		return data ? new Sticker(this.client, data) : null;
	}

	public get venue() {
		const data = this[Structure.DataProperty].venue;
		return data ? new Venue(this.client, data) : null;
	}

	public get video() {
		const data = this[Structure.DataProperty].video;
		return data ? new Video(this.client, data) : null;
	}
}
