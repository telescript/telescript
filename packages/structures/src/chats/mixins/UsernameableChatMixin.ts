import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChat } from '../BaseChat.js';

export interface UsernameableChatMixin<
	Type extends ChatType.Usernameable = ChatType.Usernameable,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class UsernameableChatMixin {
	public get username() {
		return this[Structure.DataProperty].username ?? null;
	}

	public isUsernameable(): this is UsernameableChatMixin {
		return true;
	}
}
