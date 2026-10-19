import type { Resolve } from '../registry.js';
import { RevenueWithdrawalStateType } from '@telescript/api-types';
import { BaseRevenueWithdrawalState } from './BaseRevenueWithdrawalState.js';

export class FailedRevenueWithdrawalState extends BaseRevenueWithdrawalState<RevenueWithdrawalStateType.Failed> {
	public isFailed(): this is Resolve<'FailedRevenueWithdrawalState'> {
		return true;
	}
}
