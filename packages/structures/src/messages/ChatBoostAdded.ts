import { APIChatBoostAdded } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class ChatBoostAdded extends Structure<APIChatBoostAdded> {
	public get boostCount() {
		return this[Structure.DataProperty].boost_count;
	}
}
