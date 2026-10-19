import { createStructure, defaultOwner, registerStructures, type StructureOwner, type Resolve } from '../registry.js';
import { AffiliateInfo } from './AffiliateInfo.js';
import { Invoice } from './Invoice.js';
import { OrderInfo } from './OrderInfo.js';
import { PaidMessagePriceChanged } from './PaidMessagePriceChanged.js';
import { RefundedPayment } from './RefundedPayment.js';
import { ShippingAddress } from './ShippingAddress.js';
import { StarAmount } from './StarAmount.js';
import { StarTransaction } from './StarTransaction.js';
import { SuccessfulPayment } from './SuccessfulPayment.js';
import {
	APIRevenueWithdrawalState,
	APITransactionPartner,
	RevenueWithdrawalStateType,
	TransactionPartnerType,
} from '@telescript/api-types';
import { BaseRevenueWithdrawalState } from './BaseRevenueWithdrawalState.js';
import { PendingRevenueWithdrawalState } from './PendingRevenueWithdrawalState.js';
import { SucceededRevenueWithdrawalState } from './SucceededRevenueWithdrawalState.js';
import { FailedRevenueWithdrawalState } from './FailedRevenueWithdrawalState.js';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { UserTransactionPartner } from './UserTransactionPartner.js';
import { ChatTransactionPartner } from './ChatTransactionPartner.js';
import { AffiliateProgramTransactionPartner } from './AffiliateProgramTransactionPartner.js';
import { FragmentTransactionPartner } from './FragmentTransactionPartner.js';
import { TelegramAdsTransactionPartner } from './TelegramAdsTransactionPartner.js';
import { TelegramApiTransactionPartner } from './TelegramApiTransactionPartner.js';
import { OtherTransactionPartner } from './OtherTransactionPartner.js';

export * from './AffiliateInfo.js';
export * from './BaseRevenueWithdrawalState.js';
export * from './PendingRevenueWithdrawalState.js';
export * from './SucceededRevenueWithdrawalState.js';
export * from './FailedRevenueWithdrawalState.js';
export * from './BaseTransactionPartner.js';
export * from './UserTransactionPartner.js';
export * from './ChatTransactionPartner.js';
export * from './AffiliateProgramTransactionPartner.js';
export * from './FragmentTransactionPartner.js';
export * from './TelegramAdsTransactionPartner.js';
export * from './TelegramApiTransactionPartner.js';
export * from './OtherTransactionPartner.js';
export * from './StarTransaction.js';
export * from './StarTransactions.js';
export * from './Invoice.js';
export * from './OrderInfo.js';
export * from './PaidMessagePriceChanged.js';
export * from './RefundedPayment.js';
export * from './ShippingAddress.js';
export * from './StarAmount.js';
export * from './SuccessfulPayment.js';

export type RevenueWithdrawalState =
	| Resolve<'BaseRevenueWithdrawalState'>
	| Resolve<'PendingRevenueWithdrawalState'>
	| Resolve<'SucceededRevenueWithdrawalState'>
	| Resolve<'FailedRevenueWithdrawalState'>;

export function createRevenueWithdrawalState(
	data: APIRevenueWithdrawalState,
	owner: StructureOwner = defaultOwner,
): RevenueWithdrawalState {
	switch (data.type) {
		case RevenueWithdrawalStateType.Pending:
			return createStructure(owner, 'PendingRevenueWithdrawalState', data);
		case RevenueWithdrawalStateType.Succeeded:
			return createStructure(owner, 'SucceededRevenueWithdrawalState', data);
		case RevenueWithdrawalStateType.Failed:
			return createStructure(owner, 'FailedRevenueWithdrawalState', data);
		default:
			return createStructure(owner, 'BaseRevenueWithdrawalState', data);
	}
}

export type TransactionPartner =
	| Resolve<'BaseTransactionPartner'>
	| Resolve<'UserTransactionPartner'>
	| Resolve<'ChatTransactionPartner'>
	| Resolve<'AffiliateProgramTransactionPartner'>
	| Resolve<'FragmentTransactionPartner'>
	| Resolve<'TelegramAdsTransactionPartner'>
	| Resolve<'TelegramApiTransactionPartner'>
	| Resolve<'OtherTransactionPartner'>;

export function createTransactionPartner(
	data: APITransactionPartner,
	owner: StructureOwner = defaultOwner,
): TransactionPartner {
	switch (data.type) {
		case TransactionPartnerType.User:
			return createStructure(owner, 'UserTransactionPartner', data);
		case TransactionPartnerType.Chat:
			return createStructure(owner, 'ChatTransactionPartner', data);
		case TransactionPartnerType.AffiliateProgram:
			return createStructure(owner, 'AffiliateProgramTransactionPartner', data);
		case TransactionPartnerType.Fragment:
			return createStructure(owner, 'FragmentTransactionPartner', data);
		case TransactionPartnerType.TelegramAds:
			return createStructure(owner, 'TelegramAdsTransactionPartner', data);
		case TransactionPartnerType.TelegramApi:
			return createStructure(owner, 'TelegramApiTransactionPartner', data);
		case TransactionPartnerType.Other:
			return createStructure(owner, 'OtherTransactionPartner', data);
		default:
			return createStructure(owner, 'BaseTransactionPartner', data);
	}
}

declare module '../registry.js' {
	interface DefaultTypes {
		AffiliateInfo: AffiliateInfo;
		AffiliateProgramTransactionPartner: AffiliateProgramTransactionPartner;
		BaseRevenueWithdrawalState: BaseRevenueWithdrawalState<never>;
		BaseTransactionPartner: BaseTransactionPartner<never>;
		ChatTransactionPartner: ChatTransactionPartner;
		FailedRevenueWithdrawalState: FailedRevenueWithdrawalState;
		FragmentTransactionPartner: FragmentTransactionPartner;
		Invoice: Invoice;
		OrderInfo: OrderInfo;
		OtherTransactionPartner: OtherTransactionPartner;
		PaidMessagePriceChanged: PaidMessagePriceChanged;
		PendingRevenueWithdrawalState: PendingRevenueWithdrawalState;
		RefundedPayment: RefundedPayment;
		ShippingAddress: ShippingAddress;
		StarAmount: StarAmount;
		StarTransaction: StarTransaction;
		SucceededRevenueWithdrawalState: SucceededRevenueWithdrawalState;
		SuccessfulPayment: SuccessfulPayment;
		TelegramAdsTransactionPartner: TelegramAdsTransactionPartner;
		TelegramApiTransactionPartner: TelegramApiTransactionPartner;
		UserTransactionPartner: UserTransactionPartner;
	}
}

registerStructures({
	AffiliateInfo,
	AffiliateProgramTransactionPartner,
	BaseRevenueWithdrawalState,
	BaseTransactionPartner,
	ChatTransactionPartner,
	FailedRevenueWithdrawalState,
	FragmentTransactionPartner,
	Invoice,
	OrderInfo,
	OtherTransactionPartner,
	PaidMessagePriceChanged,
	PendingRevenueWithdrawalState,
	RefundedPayment,
	ShippingAddress,
	StarAmount,
	StarTransaction,
	SucceededRevenueWithdrawalState,
	SuccessfulPayment,
	TelegramAdsTransactionPartner,
	TelegramApiTransactionPartner,
	UserTransactionPartner,
});
