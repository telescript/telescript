import type { Resolve } from '../registry.js';
import { APIRevenueWithdrawalState, RevenueWithdrawalStateType } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseRevenueWithdrawalState<
	Type extends RevenueWithdrawalStateType,
	Data extends APIRevenueWithdrawalState.FromType<Type> = APIRevenueWithdrawalState.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isPending(): this is Resolve<'PendingRevenueWithdrawalState'> {
		return false;
	}

	public isSucceeded(): this is Resolve<'SucceededRevenueWithdrawalState'> {
		return false;
	}

	public isFailed(): this is Resolve<'FailedRevenueWithdrawalState'> {
		return false;
	}
}
