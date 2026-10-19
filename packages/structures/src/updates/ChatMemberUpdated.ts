import { createStructure, type Resolve } from '../registry.js';
import { APIChatMemberUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { createChatMember } from './members/index.js';

export class ChatMemberUpdated extends Structure<APIChatMemberUpdated> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get unixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get timestamp() {
		return this.unixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.timestamp);
	}

	public get oldChatMember() {
		return createChatMember(this[Structure.DataProperty].old_chat_member, this[Structure.OwnerProperty]);
	}

	public get newChatMember() {
		return createChatMember(this[Structure.DataProperty].new_chat_member, this[Structure.OwnerProperty]);
	}

	public get inviteLink(): Resolve<'ChatInviteLink'> | null {
		const data = this[Structure.DataProperty].invite_link;
		return data ? createStructure(this[Structure.OwnerProperty], 'ChatInviteLink', data) : null;
	}

	public get viaJoinRequest() {
		return this[Structure.DataProperty].via_join_request ?? false;
	}

	public get viaChatFolderInviteLink() {
		return this[Structure.DataProperty].via_chat_folder_invite_link ?? false;
	}
}
