import type { Resolve } from '../registry.js';
import { ReactionTypeType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseReactionType } from './BaseReactionType.js';

export class EmojiReactionType extends BaseReactionType<ReactionTypeType.Emoji> {
	public isEmoji(): this is Resolve<'EmojiReactionType'> {
		return true;
	}

	public get emoji() {
		return this[Structure.DataProperty].emoji;
	}
}
