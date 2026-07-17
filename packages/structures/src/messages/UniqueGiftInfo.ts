import { APIUniqueGiftInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { UniqueGift } from './UniqueGift.js';

export class UniqueGiftInfo extends Structure<APIUniqueGiftInfo> {
	public get gift() {
		return new UniqueGift(this[Structure.DataProperty].gift);
	}

	public get origin() {
		return this[Structure.DataProperty].origin;
	}

	public get lastResaleCurrency() {
		return this[Structure.DataProperty].last_resale_currency ?? null;
	}

	public get lastResaleAmount() {
		return this[Structure.DataProperty].last_resale_amount ?? null;
	}

	public get ownedGiftId() {
		return this[Structure.DataProperty].owned_gift_id ?? null;
	}

	public get transferStarCount() {
		return this[Structure.DataProperty].transfer_star_count ?? null;
	}

	public get nextTransferUnixTimestamp() {
		return this[Structure.DataProperty].next_transfer_date ?? null;
	}

	public get nextTransferTimestamp() {
		const ts = this[Structure.DataProperty].next_transfer_date;
		return ts ? ts * 1000 : null;
	}

	public get nextTransferDate() {
		const ts = this[Structure.DataProperty].next_transfer_date;
		return ts ? new Date(ts * 1000) : null;
	}
}
