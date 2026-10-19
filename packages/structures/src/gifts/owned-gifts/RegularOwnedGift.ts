import { createStructure, type Resolve } from '../../registry.js';
import { OwnedGiftType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../../messages/formatting/entities/index.js';
import { BaseOwnedGift } from './BaseOwnedGift.js';

export class RegularOwnedGift extends BaseOwnedGift<OwnedGiftType.Regular> {
	public isRegular(): this is Resolve<'RegularOwnedGift'> {
		return true;
	}

	public get gift(): Resolve<'Gift'> {
		return createStructure(this[Structure.OwnerProperty], 'Gift', this[Structure.DataProperty].gift);
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		const text = this.text;
		return data && text ? data.map((entity) => createMessageEntity(entity, text, this[Structure.OwnerProperty])) : null;
	}

	public get isPrivate() {
		return this[Structure.DataProperty].is_private ?? false;
	}

	public get canBeUpgraded() {
		return this[Structure.DataProperty].can_be_upgraded ?? false;
	}

	public get wasRefunded() {
		return this[Structure.DataProperty].was_refunded ?? false;
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

	public get uniqueGiftNumber() {
		return this[Structure.DataProperty].unique_gift_number ?? null;
	}
}
