import { APIVenue } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Location } from './Location.js';

export class Venue extends Structure<APIVenue> {
	public get location() {
		return new Location(this[Structure.DataProperty].location);
	}

	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get address() {
		return this[Structure.DataProperty].address;
	}

	public get foursquareId() {
		return this[Structure.DataProperty].foursquare_id ?? null;
	}

	public get foursquareType() {
		return this[Structure.DataProperty].foursquare_type ?? null;
	}

	public get googlePlaceId() {
		return this[Structure.DataProperty].google_place_id ?? null;
	}

	public get googlePlaceType() {
		return this[Structure.DataProperty].google_place_type ?? null;
	}
}
