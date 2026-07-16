import { APIPollMedia } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Animation } from '../media/Animation.js';
import { Audio } from '../media/Audio.js';
import { Document } from '../media/Document.js';
import { LivePhoto } from '../media/LivePhoto.js';
import { PhotoSize } from '../media/PhotoSize.js';
import { Sticker, Video } from '../media/index.js';
import { Location } from './Location.js';
import { Venue } from './Venue.js';

export class PollMedia extends Structure<APIPollMedia> {
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

	public get location() {
		const data = this[Structure.DataProperty].location;
		return data ? new Location(data) : null;
	}

	public get photo() {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => new PhotoSize(item)) : null;
	}

	public get sticker() {
		const data = this[Structure.DataProperty].sticker;
		return data ? new Sticker(data) : null;
	}

	public get venue() {
		const data = this[Structure.DataProperty].venue;
		return data ? new Venue(data) : null;
	}

	public get video() {
		const data = this[Structure.DataProperty].video;
		return data ? new Video(data) : null;
	}
}
