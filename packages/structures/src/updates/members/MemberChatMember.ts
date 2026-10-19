import type { Resolve } from '../../registry.js';
import { APIChatMemberMember, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatMember } from './BaseChatMember.js';

export class MemberChatMember extends BaseChatMember<ChatMemberStatus.Member, APIChatMemberMember> {
	public isMember(): this is Resolve<'MemberChatMember'> {
		return true;
	}

	public get tag() {
		return this[Structure.DataProperty].tag ?? null;
	}

	public get untilUnixTimestamp() {
		return this[Structure.DataProperty].until_date ?? null;
	}

	public get untilTimestamp() {
		const ts = this.untilUnixTimestamp;
		return ts ? ts * 1000 : null;
	}

	public get untilDate() {
		const ts = this.untilTimestamp;
		return ts ? new Date(ts) : null;
	}
}
