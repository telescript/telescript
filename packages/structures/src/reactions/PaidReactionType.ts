import type { Resolve } from '../registry.js';
import { ReactionTypeType } from '@telescript/api-types';
import { BaseReactionType } from './BaseReactionType.js';

export class PaidReactionType extends BaseReactionType<ReactionTypeType.Paid> {
	public isPaid(): this is Resolve<'PaidReactionType'> {
		return true;
	}
}
