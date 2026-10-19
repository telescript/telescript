import { createStructure, type Resolve } from '../../registry.js';
import { APIBusinessOpeningHours } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BusinessOpeningHours extends Structure<APIBusinessOpeningHours> {
	public get timeZoneName() {
		return this[Structure.DataProperty].time_zone_name;
	}

	public get openingHours(): Resolve<'BusinessOpeningHoursInterval'>[] {
		return this[Structure.DataProperty].opening_hours.map((interval) =>
			createStructure(this[Structure.OwnerProperty], 'BusinessOpeningHoursInterval', interval),
		);
	}
}
