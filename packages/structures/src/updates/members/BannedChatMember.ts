import type { Resolve } from '../../registry.js';
import { APIChatMemberBanned, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatMember } from './BaseChatMember.js';

export class BannedChatMember extends BaseChatMember<ChatMemberStatus.Kicked, APIChatMemberBanned> {
	public isBanned(): this is Resolve<'BannedChatMember'> {
		return true;
	}

	public get untilUnixTimestamp() {
		return this[Structure.DataProperty].until_date;
	}

	public get untilTimestamp() {
		return this.untilUnixTimestamp * 1000;
	}

	public get untilDate() {
		return new Date(this.untilTimestamp);
	}
}
