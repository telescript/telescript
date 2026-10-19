import type { Resolve } from '../../registry.js';
import { APIChatMemberOwner, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChatMember } from './BaseChatMember.js';

export class OwnerChatMember extends BaseChatMember<ChatMemberStatus.Creator, APIChatMemberOwner> {
	public isOwner(): this is Resolve<'OwnerChatMember'> {
		return true;
	}

	public get isAnonymous() {
		return this[Structure.DataProperty].is_anonymous;
	}

	public get customTitle() {
		return this[Structure.DataProperty].custom_title ?? null;
	}
}
