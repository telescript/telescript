import type { Resolve } from '../registry.js';
import { APITransactionPartner, TransactionPartnerType } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseTransactionPartner<
	Type extends TransactionPartnerType,
	Data extends APITransactionPartner.FromType<Type> = APITransactionPartner.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isUser(): this is Resolve<'UserTransactionPartner'> {
		return false;
	}

	public isChat(): this is Resolve<'ChatTransactionPartner'> {
		return false;
	}

	public isAffiliateProgram(): this is Resolve<'AffiliateProgramTransactionPartner'> {
		return false;
	}

	public isFragment(): this is Resolve<'FragmentTransactionPartner'> {
		return false;
	}

	public isTelegramAds(): this is Resolve<'TelegramAdsTransactionPartner'> {
		return false;
	}

	public isTelegramApi(): this is Resolve<'TelegramApiTransactionPartner'> {
		return false;
	}

	public isOther(): this is Resolve<'OtherTransactionPartner'> {
		return false;
	}
}
