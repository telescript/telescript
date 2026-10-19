import type { Resolve } from '../registry.js';
import { RevenueWithdrawalStateType } from '@telescript/api-types';
import { BaseRevenueWithdrawalState } from './BaseRevenueWithdrawalState.js';

export class PendingRevenueWithdrawalState extends BaseRevenueWithdrawalState<RevenueWithdrawalStateType.Pending> {
	public isPending(): this is Resolve<'PendingRevenueWithdrawalState'> {
		return true;
	}
}
