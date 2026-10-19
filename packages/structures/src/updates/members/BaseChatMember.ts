import { createStructure, type Resolve } from '../../registry.js';
import { APIChatMember, ChatMemberStatus } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class BaseChatMember<
	Status extends ChatMemberStatus,
	Data extends Extract<APIChatMember, { status: Status }> = Extract<APIChatMember, { status: Status }>,
> extends Structure<Data> {
	public get status() {
		return this[Structure.DataProperty].status;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public isOwner(): this is Resolve<'OwnerChatMember'> {
		return false;
	}

	public isAdministrator(): this is Resolve<'AdministratorChatMember'> {
		return false;
	}

	public isMember(): this is Resolve<'MemberChatMember'> {
		return false;
	}

	public isRestricted(): this is Resolve<'RestrictedChatMember'> {
		return false;
	}

	public isLeft(): this is Resolve<'LeftChatMember'> {
		return false;
	}

	public isBanned(): this is Resolve<'BannedChatMember'> {
		return false;
	}
}
