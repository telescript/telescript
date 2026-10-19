import type { Resolve } from '../../registry.js';
import { APIChatMemberLeft, ChatMemberStatus } from '@telescript/api-types';
import { BaseChatMember } from './BaseChatMember.js';

export class LeftChatMember extends BaseChatMember<ChatMemberStatus.Left, APIChatMemberLeft> {
	public isLeft(): this is Resolve<'LeftChatMember'> {
		return true;
	}
}
