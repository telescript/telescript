import type { Resolve } from '../registry.js';
import { APIReactionType, ReactionTypeType } from '@telescript/api-types';
import { Structure } from '../Structure.js';

type ReactionData<Type extends ReactionTypeType> = Extract<APIReactionType, { type: Type }>;

export class BaseReactionType<
	Type extends ReactionTypeType,
	Data extends ReactionData<Type> = ReactionData<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isEmoji(): this is Resolve<'EmojiReactionType'> {
		return false;
	}

	public isCustomEmoji(): this is Resolve<'CustomEmojiReactionType'> {
		return false;
	}

	public isPaid(): this is Resolve<'PaidReactionType'> {
		return false;
	}
}
