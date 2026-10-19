import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../registry.js';
import { APIChatMember, ChatMemberStatus } from '@telescript/api-types';
import { BaseChatMember } from './BaseChatMember.js';
import { OwnerChatMember } from './OwnerChatMember.js';
import { AdministratorChatMember } from './AdministratorChatMember.js';
import { MemberChatMember } from './MemberChatMember.js';
import { RestrictedChatMember } from './RestrictedChatMember.js';
import { LeftChatMember } from './LeftChatMember.js';
import { BannedChatMember } from './BannedChatMember.js';

export * from './BaseChatMember.js';
export * from './OwnerChatMember.js';
export * from './AdministratorChatMember.js';
export * from './MemberChatMember.js';
export * from './RestrictedChatMember.js';
export * from './LeftChatMember.js';
export * from './BannedChatMember.js';

export type ChatMember =
	| Resolve<'BaseChatMember'>
	| Resolve<'OwnerChatMember'>
	| Resolve<'AdministratorChatMember'>
	| Resolve<'MemberChatMember'>
	| Resolve<'RestrictedChatMember'>
	| Resolve<'LeftChatMember'>
	| Resolve<'BannedChatMember'>;

export function createChatMember(data: APIChatMember, owner: StructureOwner = defaultOwner): ChatMember {
	switch (data.status) {
		case ChatMemberStatus.Creator:
			return createStructure(owner, 'OwnerChatMember', data);
		case ChatMemberStatus.Administrator:
			return createStructure(owner, 'AdministratorChatMember', data);
		case ChatMemberStatus.Member:
			return createStructure(owner, 'MemberChatMember', data);
		case ChatMemberStatus.Restricted:
			return createStructure(owner, 'RestrictedChatMember', data);
		case ChatMemberStatus.Left:
			return createStructure(owner, 'LeftChatMember', data);
		case ChatMemberStatus.Kicked:
			return createStructure(owner, 'BannedChatMember', data);
		default:
			return createStructure(owner, 'BaseChatMember', data);
	}
}

declare module '../../registry.js' {
	interface DefaultTypes {
		AdministratorChatMember: AdministratorChatMember;
		BannedChatMember: BannedChatMember;
		BaseChatMember: BaseChatMember<never>;
		LeftChatMember: LeftChatMember;
		MemberChatMember: MemberChatMember;
		OwnerChatMember: OwnerChatMember;
		RestrictedChatMember: RestrictedChatMember;
	}
}

registerStructures({
	AdministratorChatMember,
	BannedChatMember,
	BaseChatMember,
	LeftChatMember,
	MemberChatMember,
	OwnerChatMember,
	RestrictedChatMember,
});
