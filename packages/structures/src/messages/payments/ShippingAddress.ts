import { APIShippingAddress } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ShippingAddress extends Structure<APIShippingAddress> {
	public get countryCode() {
		return this[Structure.DataProperty].country_code;
	}

	public get state() {
		return this[Structure.DataProperty].state;
	}

	public get city() {
		return this[Structure.DataProperty].city;
	}

	public get streetLine1() {
		return this[Structure.DataProperty].street_line1;
	}

	public get streetLine2() {
		return this[Structure.DataProperty].street_line2;
	}

	public get postCode() {
		return this[Structure.DataProperty].post_code;
	}
}
