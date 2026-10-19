import type { Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { createReactionType } from '../reactions/index.js';
import { Structure } from '../Structure.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';

export class SuggestedReactionStoryAreaType extends BaseStoryAreaType<
	StoryAreaType.SuggestedReaction,
	APIStoryAreaType.SuggestedReaction
> {
	public isSuggestedReaction(): this is Resolve<'SuggestedReactionStoryAreaType'> {
		return true;
	}

	public get reactionType() {
		return createReactionType(this[Structure.DataProperty].reaction_type, this[Structure.OwnerProperty]);
	}

	public get isDark() {
		return this[Structure.DataProperty].is_dark ?? false;
	}

	public get isFlipped() {
		return this[Structure.DataProperty].is_flipped ?? false;
	}
}
