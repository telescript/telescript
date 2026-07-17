import { APIGiveawayCreated } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class GiveawayCreated extends Structure<APIGiveawayCreated> {
	public get prizeStarCount() {
		return this[Structure.DataProperty].prize_star_count ?? null;
	}
}
