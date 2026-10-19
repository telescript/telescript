import { createStructure, type Resolve } from '../registry.js';
import { APIUserProfileAudios } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class UserProfileAudios extends Structure<APIUserProfileAudios> {
	public get totalCount() {
		return this[Structure.DataProperty].total_count;
	}

	public get audios(): Resolve<'Audio'>[] {
		return this[Structure.DataProperty].audios.map((audio) =>
			createStructure(this[Structure.OwnerProperty], 'Audio', audio),
		);
	}
}
