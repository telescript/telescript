import { APIProximityAlertTriggered } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { User } from '../users/User.js';

export class ProximityAlertTriggered extends Structure<APIProximityAlertTriggered> {
	public get traveler() {
		return new User(this[Structure.DataProperty].traveler);
	}

	public get watcher() {
		return new User(this[Structure.DataProperty].watcher);
	}

	public get distance() {
		return this[Structure.DataProperty].distance;
	}
}
