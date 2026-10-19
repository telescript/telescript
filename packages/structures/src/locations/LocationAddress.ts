import { APILocationAddress } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class LocationAddress extends Structure<APILocationAddress> {
	public get countryCode() {
		return this[Structure.DataProperty].country_code;
	}

	public get state() {
		return this[Structure.DataProperty].state ?? null;
	}

	public get city() {
		return this[Structure.DataProperty].city ?? null;
	}

	public get street() {
		return this[Structure.DataProperty].street ?? null;
	}
}
