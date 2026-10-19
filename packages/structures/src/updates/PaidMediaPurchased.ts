import { createStructure, type Resolve } from '../registry.js';
import { APIPaidMediaPurchased } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class PaidMediaPurchased extends Structure<APIPaidMediaPurchased> {
	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get paidMediaPayload() {
		return this[Structure.DataProperty].paid_media_payload;
	}
}
