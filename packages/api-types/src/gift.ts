import { APIChat } from './chat.js';
import { APISticker } from './media.js';
import { APIMessageEntity } from './message.js';
import { TelegramCurrency } from './payments.js';

export interface APIGiftBackground {
	center_color: number;
	edge_color: number;
	text_color: number;
}

export interface APIGift {
	id: string;
	sticker: APISticker;
	star_count: number;
	upgrade_star_count?: number;
	is_premium?: true;
	has_colors?: true;
	total_count?: number;
	remaining_count?: number;
	personal_total_count?: number;
	personal_remaining_count?: number;
	background?: APIGiftBackground;
	unique_gift_variant_count?: number;
	publisher_chat?: APIChat;
}

export enum UniqueGiftModelRarity {
	Uncommon = 'uncommon',
	Rare = 'rare',
	Epic = 'epic',
	Legendary = 'legendary',
}

export interface APIUniqueGiftModel {
	name: string;
	sticker: APISticker;
	rarity_per_mille: number;
	rarity?: UniqueGiftModelRarity;
}

export interface APIUniqueGiftSymbol {
	name: string;
	sticker: APISticker;
	rarity_per_mille: number;
}

export interface APIUniqueGiftBackdropColors {
	center_color: number;
	edge_color: number;
	symbol_color: number;
	text_color: number;
}

export interface APIUniqueGiftBackdrop {
	name: string;
	colors: APIUniqueGiftBackdropColors;
	rarity_per_mille: number;
}

export interface APIUniqueGiftColors {
	model_custom_emoji_id: string;
	symbol_custom_emoji_id: string;
	light_theme_main_color: number;
	light_theme_other_colors: number[];
	dark_theme_main_color: number;
	dark_theme_other_colors: number[];
}

export interface APIUniqueGift {
	gift_id: string;
	base_name: string;
	name: string;
	number: number;
	model: APIUniqueGiftModel;
	symbol: APIUniqueGiftSymbol;
	backdrop: APIUniqueGiftBackdrop;
	is_premium?: true;
	is_burned?: true;
	is_from_blockchain?: true;
	colors?: APIUniqueGiftColors;
	publisher_chat?: APIChat;
}

export interface APIGiftInfo {
	gift: APIGift;
	owned_gift_id?: string;
	convert_star_count?: number;
	prepaid_upgrade_star_count?: number;
	is_upgrade_separate?: true;
	can_be_upgraded?: true;
	text?: string;
	entities?: APIMessageEntity[];
	is_private?: true;
	unique_gift_number?: number;
}

export enum UniqueGiftInfoOrigin {
	Upgrade = 'upgrade',
	Transfer = 'transfer',
	Resale = 'resale',
	GiftedUpgrade = 'gifted_upgrade',
	Offer = 'offer',
}

export interface APIUniqueGiftInfo {
	gift: APIUniqueGift;
	origin: UniqueGiftInfoOrigin;
	text?: string;
	entities?: APIMessageEntity[];
	is_private?: true;
	last_resale_currency?: TelegramCurrency;
	last_resale_amount?: number;
	owned_gift_id?: string;
	transfer_star_count?: number;
	next_transfer_date?: number;
}
