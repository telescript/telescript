import { APIMessage, RepliedToMessageFrom } from './message.js';
import { APIStarAmount, TelegramCurrency } from './payments.js';

export interface APISuggestedPostApproved {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	price?: APISuggestedPostPrice;
	send_date: number;
}

export interface APISuggestedPostApprovalFailed {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	price: APISuggestedPostPrice;
}

export interface APISuggestedPostDeclined {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	comment?: string;
}

export interface APISuggestedPostPaid {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	currency: TelegramCurrency;
	amount?: number;
	star_amount?: APIStarAmount;
}

export enum SuggestedPostRefundedReason {
	PostDeleted = 'post_deleted',
	PaymentRefunded = 'payment_refunded',
}

export interface APISuggestedPostRefunded {
	suggested_post_message?: RepliedToMessageFrom<APIMessage>;
	reason: SuggestedPostRefundedReason;
}

export interface APISuggestedPostPrice {
	currency: TelegramCurrency;
	amount: number;
}

export enum SuggestedPostInfoState {
	Pending = 'pending',
	Approved = 'approved',
	Declined = 'declined',
}

export interface APISuggestedPostInfo {
	state: SuggestedPostInfoState;
	price?: APISuggestedPostPrice;
	send_date?: number;
}

export interface APISuggestedPostParameters {
	price?: APISuggestedPostPrice;
	send_date?: number;
}
