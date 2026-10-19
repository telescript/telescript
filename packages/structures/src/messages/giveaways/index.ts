import { registerStructures } from '../../registry.js';
import { Giveaway } from './Giveaway.js';
import { GiveawayCompleted } from './GiveawayCompleted.js';
import { GiveawayCreated } from './GiveawayCreated.js';
import { GiveawayWinners } from './GiveawayWinners.js';
export * from './Giveaway.js';
export * from './GiveawayCompleted.js';
export * from './GiveawayCreated.js';
export * from './GiveawayWinners.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		Giveaway: Giveaway;
		GiveawayCompleted: GiveawayCompleted;
		GiveawayCreated: GiveawayCreated;
		GiveawayWinners: GiveawayWinners;
	}
}

registerStructures({ Giveaway, GiveawayCompleted, GiveawayCreated, GiveawayWinners });
