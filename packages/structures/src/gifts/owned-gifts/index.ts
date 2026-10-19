import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../registry.js';
import { APIOwnedGift, OwnedGiftType } from '@telescript/api-types';
import { BaseOwnedGift } from './BaseOwnedGift.js';
import { RegularOwnedGift } from './RegularOwnedGift.js';
import { UniqueOwnedGift } from './UniqueOwnedGift.js';

export * from './BaseOwnedGift.js';
export * from './OwnedGifts.js';
export * from './RegularOwnedGift.js';
export * from './UniqueOwnedGift.js';

export type OwnedGift = Resolve<'BaseOwnedGift'> | Resolve<'RegularOwnedGift'> | Resolve<'UniqueOwnedGift'>;

export function createOwnedGift(data: APIOwnedGift, owner: StructureOwner = defaultOwner): OwnedGift {
	switch (data.type) {
		case OwnedGiftType.Regular:
			return createStructure(owner, 'RegularOwnedGift', data);
		case OwnedGiftType.Unique:
			return createStructure(owner, 'UniqueOwnedGift', data);
		default:
			return createStructure(owner, 'BaseOwnedGift', data);
	}
}

declare module '../../registry.js' {
	interface DefaultTypes {
		BaseOwnedGift: BaseOwnedGift<never>;
		RegularOwnedGift: RegularOwnedGift;
		UniqueOwnedGift: UniqueOwnedGift;
	}
}

registerStructures({ BaseOwnedGift, RegularOwnedGift, UniqueOwnedGift });
