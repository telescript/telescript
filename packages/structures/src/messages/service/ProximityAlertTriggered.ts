import { APIProximityAlertTriggered } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class ProximityAlertTriggered extends Structure<APIProximityAlertTriggered> {
	public get traveler(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].traveler);
	}

	public get watcher(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].watcher);
	}

	public get distance() {
		return this[Structure.DataProperty].distance;
	}
}
