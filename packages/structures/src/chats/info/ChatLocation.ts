import { createStructure, type Resolve } from '../../registry.js';
import { APIChatLocation } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ChatLocation extends Structure<APIChatLocation> {
	public get location(): Resolve<'Location'> {
		return createStructure(this[Structure.OwnerProperty], 'Location', this[Structure.DataProperty].location);
	}

	public get address() {
		return this[Structure.DataProperty].address;
	}
}
