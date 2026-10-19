import { createStructure, type Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';

export class LocationStoryAreaType extends BaseStoryAreaType<StoryAreaType.Location, APIStoryAreaType.Location> {
	public isLocation(): this is Resolve<'LocationStoryAreaType'> {
		return true;
	}

	public get latitude() {
		return this[Structure.DataProperty].latitude;
	}

	public get longitude() {
		return this[Structure.DataProperty].longitude;
	}

	public get address(): Resolve<'LocationAddress'> | null {
		const data = this[Structure.DataProperty].address;
		return data ? createStructure(this[Structure.OwnerProperty], 'LocationAddress', data) : null;
	}
}
