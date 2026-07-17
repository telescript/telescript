import { APIChat } from './chat.js';
import { APIPaidMedia } from './media.js';
import { APIGift } from './message.js';
import { APIUser } from './user.js';

export interface APIInvoice {
	title: string;
	description: string;
	start_parameter: string;
	currency: string;
	total_amount: number;
}

export interface APIShippingAddress {
	country_code: string;
	state: string;
	city: string;
	street_line1: string;
	street_line2: string;
	post_code: string;
}

export interface APIOrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: APIShippingAddress;
}

export interface APISuccessfulPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	subscription_expiration_date?: number;
	is_recurring?: boolean;
	is_first_recurring?: boolean;
	shipping_option_id?: string;
	order_info?: APIOrderInfo;
	telegram_payment_charge_id: string;
	provider_payment_charge_id: string;
}

export interface APIRefundedPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	telegram_payment_charge_id: string;
	provider_payment_charge_id?: string;
}

export interface APILabeledPrice {
	label: string;
	amount: number;
}

export interface APIShippingOption {
	id: string;
	title: string;
	prices: APILabeledPrice[];
}

export enum RevenueWithdrawalStateType {
	Pending = 'pending',
	Succeeded = 'succeeded',
	Failed = 'failed',
}

export type APIRevenueWithdrawalState =
	| APIRevenueWithdrawalState.Pending
	| APIRevenueWithdrawalState.Succeeded
	| APIRevenueWithdrawalState.Failed;

export namespace APIRevenueWithdrawalState {
	export interface Base<Type extends RevenueWithdrawalStateType> {
		type: Type;
	}

	export interface Pending extends Base<RevenueWithdrawalStateType.Pending> {}

	export interface Succeeded extends Base<RevenueWithdrawalStateType.Succeeded> {
		date: number;
		url: string;
	}

	export interface Failed extends Base<RevenueWithdrawalStateType.Failed> {}

	export type FromType<Type extends RevenueWithdrawalStateType> = Extract<APIRevenueWithdrawalState, { type: Type }>;
}

export interface APIAffiliateInfo {
	affiliate_user?: APIUser;
	affiliate_chat?: APIChat;
	commission_per_mille: number;
	amount: number;
	nanostar_amount?: number;
}

export enum TransactionPartnerType {
	User = 'user',
	Chat = 'chat',
	AffiliateProgram = 'affiliate_program',
	Fragment = 'fragment',
	TelegramAds = 'telegram_ads',
	TelegramApi = 'telegram_api',
	Other = 'other',
}

export enum UserTransactionType {
	InvoicePayment = 'invoice_payment',
	PaidMediaPayment = 'paid_media_payment',
	GiftPurchase = 'gift_purchase',
	PremiumPurchase = 'premium_purchase',
	BusinessAccountTransfer = 'business_account_transfer',
}

export type APITransactionPartner =
	| APITransactionPartner.User
	| APITransactionPartner.Chat
	| APITransactionPartner.AffiliateProgram
	| APITransactionPartner.Fragment
	| APITransactionPartner.TelegramAds
	| APITransactionPartner.TelegramApi
	| APITransactionPartner.Other;

export namespace APITransactionPartner {
	export interface Base<Type extends TransactionPartnerType> {
		type: Type;
	}

	export interface User extends Base<TransactionPartnerType.User> {
		transaction_type: UserTransactionType;
		user: APIUser;
		affiliate?: APIAffiliateInfo;
		invoice_payload?: string;
		subscription_period?: number;
		paid_media?: APIPaidMedia[];
		paid_media_payload?: string;
		gift?: APIGift;
		premium_subscription_duration?: number;
	}

	export interface Chat extends Base<TransactionPartnerType.Chat> {
		chat: APIChat;
		gift?: APIGift;
	}

	export interface AffiliateProgram extends Base<TransactionPartnerType.AffiliateProgram> {
		sponsor_user?: APIUser;
		commission_per_mille: number;
	}

	export interface Fragment extends Base<TransactionPartnerType.Fragment> {
		withdrawal_state?: APIRevenueWithdrawalState;
	}

	export interface TelegramAds extends Base<TransactionPartnerType.TelegramAds> {}

	export interface TelegramApi extends Base<TransactionPartnerType.TelegramApi> {
		request_count: number;
	}

	export interface Other extends Base<TransactionPartnerType.Other> {}

	export type FromType<Type extends TransactionPartnerType> = Extract<APITransactionPartner, { type: Type }>;
}

export interface APIStarTransaction {
	id: string;
	amount: number;
	nanostar_amount?: number;
	date: number;
	source?: APITransactionPartner;
	receiver?: APITransactionPartner;
}

export interface APIStarTransactions {
	transactions: APIStarTransaction[];
}
