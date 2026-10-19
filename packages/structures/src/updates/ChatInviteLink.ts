import { createStructure, type Resolve } from '../registry.js';
import { APIChatInviteLink } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class ChatInviteLink extends Structure<APIChatInviteLink> {
	public get inviteLink() {
		return this[Structure.DataProperty].invite_link;
	}

	public get creator(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].creator);
	}

	public get createsJoinRequest() {
		return this[Structure.DataProperty].creates_join_request;
	}

	public get isPrimary() {
		return this[Structure.DataProperty].is_primary;
	}

	public get isRevoked() {
		return this[Structure.DataProperty].is_revoked;
	}

	public get name() {
		return this[Structure.DataProperty].name ?? null;
	}

	public get expireUnixTimestamp() {
		return this[Structure.DataProperty].expire_date ?? null;
	}

	public get expireTimestamp() {
		const ts = this.expireUnixTimestamp;
		return ts ? ts * 1000 : null;
	}

	public get expireDate() {
		const ts = this.expireTimestamp;
		return ts ? new Date(ts) : null;
	}

	public get memberLimit() {
		return this[Structure.DataProperty].member_limit ?? null;
	}

	public get pendingJoinRequestCount() {
		return this[Structure.DataProperty].pending_join_request_count ?? null;
	}

	public get subscriptionPeriod() {
		return this[Structure.DataProperty].subscription_period ?? null;
	}

	public get subscriptionPrice() {
		return this[Structure.DataProperty].subscription_price ?? null;
	}
}
