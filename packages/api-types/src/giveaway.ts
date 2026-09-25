import { APIChat } from './chat.js';
import { APIMessage } from './message.js';
import { APIUser } from './user.js';

export interface APIGiveawayCreated {
	prize_star_count?: number;
}

export interface APIGiveaway {
	chats: APIChat[];
	winners_selection_date: number;
	winner_count: number;
	only_new_members?: true;
	has_public_winners?: true;
	prize_description?: string;
	country_codes?: string[];
	prize_star_count?: number;
	premium_subscription_month_count?: number;
}

export interface APIGiveawayWinners {
	chat: APIChat;
	giveaway_message_id: number;
	winners_selection_date: number;
	winner_count: number;
	winners: APIUser[];
	additional_chat_count?: number;
	prize_star_count?: number;
	premium_subscription_month_count?: number;
	unclaimed_prize_count?: number;
	only_new_members?: true;
	was_refunded?: true;
	prize_description?: string;
}

export interface APIGiveawayCompleted {
	winner_count: number;
	unclaimed_prize_count?: number;
	giveaway_message?: APIMessage;
	is_star_giveaway?: true;
}
