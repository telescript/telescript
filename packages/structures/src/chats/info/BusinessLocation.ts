import { createStructure, type Resolve } from '../../registry.js';
import { APIBusinessLocation } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BusinessLocation extends Structure<APIBusinessLocation> {
	public get address() {
		return this[Structure.DataProperty].address;
	}

	public get location(): Resolve<'Location'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'Location', data) : null;
	}
}
