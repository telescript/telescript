import { APIReactionCount } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createReactionType } from '../reactions/index.js';

export class ReactionCount extends Structure<APIReactionCount> {
	public get type() {
		return createReactionType(this[Structure.DataProperty].type, this[Structure.OwnerProperty]);
	}

	public get totalCount() {
		return this[Structure.DataProperty].total_count;
	}
}
