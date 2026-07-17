import { Location as ParentLocation } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APILocation } from '@telescript/api-types';

export interface Location extends ParentLocation {}

export class Location extends ParentLocation {
	public constructor(
		public client: Client,
		data: APILocation,
	) {
		super(data);
	}
}
