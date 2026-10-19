import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../registry.js';
import { APIChatBoostSource, ChatBoostSourceSource } from '@telescript/api-types';
import { BaseChatBoostSource } from './BaseChatBoostSource.js';
import { PremiumChatBoostSource } from './PremiumChatBoostSource.js';
import { GiftCodeChatBoostSource } from './GiftCodeChatBoostSource.js';
import { GiveawayChatBoostSource } from './GiveawayChatBoostSource.js';

export * from './BaseChatBoostSource.js';
export * from './PremiumChatBoostSource.js';
export * from './GiftCodeChatBoostSource.js';
export * from './GiveawayChatBoostSource.js';

export type ChatBoostSource =
	| Resolve<'BaseChatBoostSource'>
	| Resolve<'PremiumChatBoostSource'>
	| Resolve<'GiftCodeChatBoostSource'>
	| Resolve<'GiveawayChatBoostSource'>;

export function createChatBoostSource(data: APIChatBoostSource, owner: StructureOwner = defaultOwner): ChatBoostSource {
	switch (data.source) {
		case ChatBoostSourceSource.Premium:
			return createStructure(owner, 'PremiumChatBoostSource', data);
		case ChatBoostSourceSource.GiftCode:
			return createStructure(owner, 'GiftCodeChatBoostSource', data);
		case ChatBoostSourceSource.Giveaway:
			return createStructure(owner, 'GiveawayChatBoostSource', data);
		default:
			return createStructure(owner, 'BaseChatBoostSource', data);
	}
}

declare module '../../registry.js' {
	interface DefaultTypes {
		BaseChatBoostSource: BaseChatBoostSource<never>;
		GiftCodeChatBoostSource: GiftCodeChatBoostSource;
		GiveawayChatBoostSource: GiveawayChatBoostSource;
		PremiumChatBoostSource: PremiumChatBoostSource;
	}
}

registerStructures({ BaseChatBoostSource, GiftCodeChatBoostSource, GiveawayChatBoostSource, PremiumChatBoostSource });
