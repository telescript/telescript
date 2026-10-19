import { createStructure, type Resolve } from '../registry.js';
import { APIUserProfilePhotos } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class UserProfilePhotos extends Structure<APIUserProfilePhotos> {
	public get totalCount() {
		return this[Structure.DataProperty].total_count;
	}

	public get photos(): Resolve<'PhotoSize'>[][] {
		return this[Structure.DataProperty].photos.map((sizes) =>
			sizes.map((size) => createStructure(this[Structure.OwnerProperty], 'PhotoSize', size)),
		);
	}
}
