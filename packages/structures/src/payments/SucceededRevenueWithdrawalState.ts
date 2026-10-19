import type { Resolve } from '../registry.js';
import { RevenueWithdrawalStateType } from '@telescript/api-types';
import { BaseRevenueWithdrawalState } from './BaseRevenueWithdrawalState.js';
import { Structure } from '../Structure.js';

export class SucceededRevenueWithdrawalState extends BaseRevenueWithdrawalState<RevenueWithdrawalStateType.Succeeded> {
	public get dateUnixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get dateTimestamp() {
		return this.dateUnixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.dateTimestamp);
	}

	public get url() {
		return this[Structure.DataProperty].url;
	}

	public isSucceeded(): this is Resolve<'SucceededRevenueWithdrawalState'> {
		return true;
	}
}
