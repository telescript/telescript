import { createStructure, type Resolve } from '../../registry.js';
import { APIOwnedGift, OwnedGiftType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

type OwnedGiftData<Type extends OwnedGiftType> = Extract<APIOwnedGift, { type: Type }>;

export class BaseOwnedGift<
	Type extends OwnedGiftType,
	Data extends OwnedGiftData<Type> = OwnedGiftData<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get ownedGiftId() {
		return this[Structure.DataProperty].owned_gift_id ?? null;
	}

	public get senderUser(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].sender_user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get sendUnixTimestamp() {
		return this[Structure.DataProperty].send_date;
	}

	public get sendTimestamp() {
		return this.sendUnixTimestamp * 1000;
	}

	public get sendDate() {
		return new Date(this.sendTimestamp);
	}

	public get isSaved() {
		return this[Structure.DataProperty].is_saved ?? false;
	}

	public isRegular(): this is Resolve<'RegularOwnedGift'> {
		return false;
	}

	public isUnique(): this is Resolve<'UniqueOwnedGift'> {
		return false;
	}
}
