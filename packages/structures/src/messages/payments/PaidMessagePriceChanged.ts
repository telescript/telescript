import { APIPaidMessagePriceChanged } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class PaidMessagePriceChanged extends Structure<APIPaidMessagePriceChanged> {
	public get paidMessageStarCount() {
		return this[Structure.DataProperty].paid_message_star_count;
	}
}
