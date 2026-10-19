import { createStructure, type Resolve } from '../registry.js';
import { APIChatJoinRequest } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class ChatJoinRequest extends Structure<APIChatJoinRequest> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get userChatId() {
		return this[Structure.DataProperty].user_chat_id;
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

	public get bio() {
		return this[Structure.DataProperty].bio ?? null;
	}

	public get inviteLink(): Resolve<'ChatInviteLink'> | null {
		const data = this[Structure.DataProperty].invite_link;
		return data ? createStructure(this[Structure.OwnerProperty], 'ChatInviteLink', data) : null;
	}

	public get queryId() {
		return this[Structure.DataProperty].query_id ?? null;
	}
}
