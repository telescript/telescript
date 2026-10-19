import { createStructure, defaultOwner, registerStructures, type StructureOwner, type Resolve } from '../registry.js';
import { APIReactionType, ReactionTypeType } from '@telescript/api-types';
import { BaseReactionType } from './BaseReactionType.js';
import { CustomEmojiReactionType } from './CustomEmojiReactionType.js';
import { EmojiReactionType } from './EmojiReactionType.js';
import { PaidReactionType } from './PaidReactionType.js';

export * from './BaseReactionType.js';
export * from './CustomEmojiReactionType.js';
export * from './EmojiReactionType.js';
export * from './PaidReactionType.js';

export type ReactionType =
	| Resolve<'BaseReactionType'>
	| Resolve<'EmojiReactionType'>
	| Resolve<'CustomEmojiReactionType'>
	| Resolve<'PaidReactionType'>;

export function createReactionType(data: APIReactionType, owner: StructureOwner = defaultOwner): ReactionType {
	switch (data.type) {
		case ReactionTypeType.Emoji:
			return createStructure(owner, 'EmojiReactionType', data);
		case ReactionTypeType.CustomEmoji:
			return createStructure(owner, 'CustomEmojiReactionType', data);
		case ReactionTypeType.Paid:
			return createStructure(owner, 'PaidReactionType', data);
		default:
			return createStructure(owner, 'BaseReactionType', data);
	}
}

declare module '../registry.js' {
	interface DefaultTypes {
		BaseReactionType: BaseReactionType<never>;
		CustomEmojiReactionType: CustomEmojiReactionType;
		EmojiReactionType: EmojiReactionType;
		PaidReactionType: PaidReactionType;
	}
}

registerStructures({ BaseReactionType, CustomEmojiReactionType, EmojiReactionType, PaidReactionType });
