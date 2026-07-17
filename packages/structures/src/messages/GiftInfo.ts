import { APIGiftInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Gift } from './Gift.js';
import { createMessageEntity } from './entity/index.js';

export class GiftInfo extends Structure<APIGiftInfo> {
	public get gift() {
		return new Gift(this[Structure.DataProperty].gift);
	}

	public get ownedGiftId() {
		return this[Structure.DataProperty].owned_gift_id ?? null;
	}

	public get convertStarCount() {
		return this[Structure.DataProperty].convert_star_count ?? null;
	}

	public get prepaidUpgradeStarCount() {
		return this[Structure.DataProperty].prepaid_upgrade_star_count ?? null;
	}

	public get isUpgradeSeparate() {
		return this[Structure.DataProperty].is_upgrade_separate ?? false;
	}

	public get canBeUpgraded() {
		return this[Structure.DataProperty].can_be_upgraded ?? false;
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text ?? '')) : null;
	}

	public get isPrivate() {
		return this[Structure.DataProperty].is_private ?? false;
	}

	public get uniqueGiftNumber() {
		return this[Structure.DataProperty].unique_gift_number ?? null;
	}
}
