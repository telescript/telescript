import { APIExternalReplyInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { createMessageOrigin } from './origins/index.js';
import { createStructure, type Resolve } from '../registry.js';

export class ExternalReplyInfo extends Structure<APIExternalReplyInfo> {
	public get origin() {
		return createMessageOrigin(this[Structure.DataProperty].origin, this[Structure.OwnerProperty]);
	}

	public get chat() {
		const data = this[Structure.DataProperty].chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id ?? null;
	}

	public get linkPreviewOptions(): Resolve<'LinkPreviewOptions'> | null {
		const data = this[Structure.DataProperty].link_preview_options;
		return data ? createStructure(this[Structure.OwnerProperty], 'LinkPreviewOptions', data) : null;
	}

	public get animation(): Resolve<'Animation'> | null {
		const data = this[Structure.DataProperty].animation;
		return data ? createStructure(this[Structure.OwnerProperty], 'Animation', data) : null;
	}

	public get audio(): Resolve<'Audio'> | null {
		const data = this[Structure.DataProperty].audio;
		return data ? createStructure(this[Structure.OwnerProperty], 'Audio', data) : null;
	}

	public get document(): Resolve<'Document'> | null {
		const data = this[Structure.DataProperty].document;
		return data ? createStructure(this[Structure.OwnerProperty], 'Document', data) : null;
	}

	public get livePhoto(): Resolve<'LivePhoto'> | null {
		const data = this[Structure.DataProperty].live_photo;
		return data ? createStructure(this[Structure.OwnerProperty], 'LivePhoto', data) : null;
	}

	public get paidMedia(): Resolve<'PaidMediaInfo'> | null {
		const data = this[Structure.DataProperty].paid_media;
		return data ? createStructure(this[Structure.OwnerProperty], 'PaidMediaInfo', data) : null;
	}

	public get photo(): Resolve<'PhotoSize'>[] | null {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', item)) : null;
	}

	public get sticker(): Resolve<'Sticker'> | null {
		const data = this[Structure.DataProperty].sticker;
		return data ? createStructure(this[Structure.OwnerProperty], 'Sticker', data) : null;
	}

	public get story(): Resolve<'Story'> | null {
		const data = this[Structure.DataProperty].story;
		return data ? createStructure(this[Structure.OwnerProperty], 'Story', data) : null;
	}

	public get video(): Resolve<'Video'> | null {
		const data = this[Structure.DataProperty].video;
		return data ? createStructure(this[Structure.OwnerProperty], 'Video', data) : null;
	}

	public get videoNote(): Resolve<'VideoNote'> | null {
		const data = this[Structure.DataProperty].video_note;
		return data ? createStructure(this[Structure.OwnerProperty], 'VideoNote', data) : null;
	}

	public get voice(): Resolve<'Voice'> | null {
		const data = this[Structure.DataProperty].voice;
		return data ? createStructure(this[Structure.OwnerProperty], 'Voice', data) : null;
	}

	public get hasMediaSpoiler() {
		return this[Structure.DataProperty].has_media_spoiler ?? null;
	}

	public get checklist(): Resolve<'Checklist'> | null {
		const data = this[Structure.DataProperty].checklist;
		return data ? createStructure(this[Structure.OwnerProperty], 'Checklist', data) : null;
	}

	public get contact(): Resolve<'Contact'> | null {
		const data = this[Structure.DataProperty].contact;
		return data ? createStructure(this[Structure.OwnerProperty], 'Contact', data) : null;
	}

	public get dice(): Resolve<'Dice'> | null {
		const data = this[Structure.DataProperty].dice;
		return data ? createStructure(this[Structure.OwnerProperty], 'Dice', data) : null;
	}

	public get game(): Resolve<'Game'> | null {
		const data = this[Structure.DataProperty].game;
		return data ? createStructure(this[Structure.OwnerProperty], 'Game', data) : null;
	}

	public get poll(): Resolve<'Poll'> | null {
		const data = this[Structure.DataProperty].poll;
		return data ? createStructure(this[Structure.OwnerProperty], 'Poll', data) : null;
	}

	public get venue(): Resolve<'Venue'> | null {
		const data = this[Structure.DataProperty].venue;
		return data ? createStructure(this[Structure.OwnerProperty], 'Venue', data) : null;
	}

	public get location(): Resolve<'Location'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'Location', data) : null;
	}

	public get giveaway(): Resolve<'Giveaway'> | null {
		const data = this[Structure.DataProperty].giveaway;
		return data ? createStructure(this[Structure.OwnerProperty], 'Giveaway', data) : null;
	}

	public get giveawayWinners(): Resolve<'GiveawayWinners'> | null {
		const data = this[Structure.DataProperty].giveaway_winners;
		return data ? createStructure(this[Structure.OwnerProperty], 'GiveawayWinners', data) : null;
	}

	public get invoice(): Resolve<'Invoice'> | null {
		const data = this[Structure.DataProperty].invoice;
		return data ? createStructure(this[Structure.OwnerProperty], 'Invoice', data) : null;
	}
}
