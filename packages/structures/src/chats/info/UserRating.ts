import { APIUserRating } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class UserRating extends Structure<APIUserRating> {
	public get level() {
		return this[Structure.DataProperty].level;
	}

	public get rating() {
		return this[Structure.DataProperty].rating;
	}

	public get currentLevelRating() {
		return this[Structure.DataProperty].current_level_rating;
	}

	public get nextLevelRating() {
		return this[Structure.DataProperty].next_level_rating ?? null;
	}
}
