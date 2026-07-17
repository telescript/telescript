import { Venue as ParentVenue, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIVenue } from '@telescript/api-types';
import { Location } from './Location.js';

export interface Venue extends ParentVenue {}

export class Venue extends ParentVenue {
	public constructor(
		public client: Client,
		data: APIVenue,
	) {
		super(data);
	}

	public get location() {
		return new Location(this.client, this[Structure.DataProperty].location);
	}
}
