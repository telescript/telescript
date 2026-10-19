import { APILocation } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class Location extends Structure<APILocation> {
	public get latitude() {
		return this[Structure.DataProperty].latitude;
	}

	public get longitude() {
		return this[Structure.DataProperty].longitude;
	}

	public get horizontalAccuracy() {
		return this[Structure.DataProperty].horizontal_accuracy ?? null;
	}

	public get livePeriod() {
		return this[Structure.DataProperty].live_period ?? null;
	}

	public get heading() {
		return this[Structure.DataProperty].heading ?? null;
	}

	public get proximityAlertRadius() {
		return this[Structure.DataProperty].proximity_alert_radius ?? null;
	}
}
