import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Chat } from '../Chat.js';

export interface UsernameableChatMixin<
	Type extends ChatType.Usernameable = ChatType.Usernameable,
	Data extends APIChat.Usernameable = APIChat.FromType<Type>,
> extends Chat<Type, Data> {}

export class UsernameableChatMixin {
	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public isUsernameable(): this is UsernameableChatMixin & this {
		return true;
	}
}
