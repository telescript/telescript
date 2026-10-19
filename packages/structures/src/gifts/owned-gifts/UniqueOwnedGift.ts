import { createStructure, type Resolve } from '../../registry.js';
import { OwnedGiftType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseOwnedGift } from './BaseOwnedGift.js';

export class UniqueOwnedGift extends BaseOwnedGift<OwnedGiftType.Unique> {
	public isUnique(): this is Resolve<'UniqueOwnedGift'> {
		return true;
	}

	public get gift(): Resolve<'UniqueGift'> {
		return createStructure(this[Structure.OwnerProperty], 'UniqueGift', this[Structure.DataProperty].gift);
	}

	public get canBeTransferred() {
		return this[Structure.DataProperty].can_be_transferred ?? false;
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
