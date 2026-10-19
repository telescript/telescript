import type { Resolve } from '../registry.js';
import { ReactionTypeType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseReactionType } from './BaseReactionType.js';

export class CustomEmojiReactionType extends BaseReactionType<ReactionTypeType.CustomEmoji> {
	public isCustomEmoji(): this is Resolve<'CustomEmojiReactionType'> {
		return true;
	}

	public get customEmojiId() {
		return this[Structure.DataProperty].custom_emoji_id;
	}
}
