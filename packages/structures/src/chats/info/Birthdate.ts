import { APIBirthdate } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class Birthdate extends Structure<APIBirthdate> {
	public get day() {
		return this[Structure.DataProperty].day;
	}

	public get month() {
		return this[Structure.DataProperty].month;
	}

	public get year() {
		return this[Structure.DataProperty].year ?? null;
	}
}
