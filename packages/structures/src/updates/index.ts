import { registerStructures } from '../registry.js';
import { BotSubscriptionUpdated } from './BotSubscriptionUpdated.js';
import { BusinessBotRights } from './BusinessBotRights.js';
import { BusinessMessagesDeleted } from './BusinessMessagesDeleted.js';
import { ChatBoost } from './ChatBoost.js';
import { ChatInviteLink } from './ChatInviteLink.js';
import { MessageReactionCountUpdated } from './MessageReactionCountUpdated.js';
import { MessageReactionUpdated } from './MessageReactionUpdated.js';
import { ReactionCount } from './ReactionCount.js';
export * from './BotSubscriptionUpdated.js';
export * from './boosts/index.js';
export * from './members/index.js';
export * from './BusinessBotRights.js';
export * from './BusinessConnection.js';
export * from './BusinessMessagesDeleted.js';
export * from './CallbackQuery.js';
export * from './ChatBoost.js';
export * from './ChatBoostRemoved.js';
export * from './ChatBoostUpdated.js';
export * from './ChatInviteLink.js';
export * from './ChatJoinRequest.js';
export * from './ChatMemberUpdated.js';
export * from './ChosenInlineResult.js';
export * from './InlineQuery.js';
export * from './ManagedBotUpdated.js';
export * from './MessageReactionCountUpdated.js';
export * from './MessageReactionUpdated.js';
export * from './PaidMediaPurchased.js';
export * from './PreCheckoutQuery.js';
export * from './ReactionCount.js';
export * from './ShippingQuery.js';
export * from './PollAnswer.js';

declare module '../registry.js' {
	interface DefaultTypes {
		BotSubscriptionUpdated: BotSubscriptionUpdated;
		BusinessBotRights: BusinessBotRights;
		BusinessMessagesDeleted: BusinessMessagesDeleted;
		ChatBoost: ChatBoost;
		ChatInviteLink: ChatInviteLink;
		MessageReactionCountUpdated: MessageReactionCountUpdated;
		MessageReactionUpdated: MessageReactionUpdated;
		ReactionCount: ReactionCount;
	}
}

registerStructures({
	BotSubscriptionUpdated,
	BusinessBotRights,
	BusinessMessagesDeleted,
	ChatBoost,
	ChatInviteLink,
	MessageReactionCountUpdated,
	MessageReactionUpdated,
	ReactionCount,
});
