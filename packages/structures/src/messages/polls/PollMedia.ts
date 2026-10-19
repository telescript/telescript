import { APIPollMedia } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class PollMedia extends Structure<APIPollMedia> {
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

	public get link(): Resolve<'Link'> | null {
		const data = this[Structure.DataProperty].link;
		return data ? createStructure(this[Structure.OwnerProperty], 'Link', data) : null;
	}

	public get location(): Resolve<'Location'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'Location', data) : null;
	}

	public get photo(): Resolve<'PhotoSize'>[] | null {
		const data = this[Structure.DataProperty].photo;
		return data ? data.map((item) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', item)) : null;
	}

	public get sticker(): Resolve<'Sticker'> | null {
		const data = this[Structure.DataProperty].sticker;
		return data ? createStructure(this[Structure.OwnerProperty], 'Sticker', data) : null;
	}

	public get venue(): Resolve<'Venue'> | null {
		const data = this[Structure.DataProperty].venue;
		return data ? createStructure(this[Structure.OwnerProperty], 'Venue', data) : null;
	}

	public get video(): Resolve<'Video'> | null {
		const data = this[Structure.DataProperty].video;
		return data ? createStructure(this[Structure.OwnerProperty], 'Video', data) : null;
	}
}
