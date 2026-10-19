import { APIAcceptedGiftTypes } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class AcceptedGiftTypes extends Structure<APIAcceptedGiftTypes> {
	public get unlimitedGifts() {
		return this[Structure.DataProperty].unlimited_gifts ?? false;
	}

	public get limitedGifts() {
		return this[Structure.DataProperty].limited_gifts ?? false;
	}

	public get uniqueGifts() {
		return this[Structure.DataProperty].unique_gifts ?? false;
	}

	public get premiumSubscription() {
		return this[Structure.DataProperty].premium_subscription ?? false;
	}

	public get giftsFromChannels() {
		return this[Structure.DataProperty].gifts_from_channels ?? false;
	}
}
