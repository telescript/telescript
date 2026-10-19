import { APIBusinessOpeningHoursInterval } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BusinessOpeningHoursInterval extends Structure<APIBusinessOpeningHoursInterval> {
	public get openingMinute() {
		return this[Structure.DataProperty].opening_minute;
	}

	public get closingMinute() {
		return this[Structure.DataProperty].closing_minute;
	}
}
