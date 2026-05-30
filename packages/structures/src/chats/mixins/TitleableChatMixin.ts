import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { Chat } from '../Chat.js';

export interface TitleableChatMixin<
	Type extends ChatType.Titleable = ChatType.Titleable,
	Data extends APIChat.Titleable = APIChat.FromType<Type>,
> extends Chat<Type, Data> {}

export class TitleableChatMixin {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public isTitleable(): this is TitleableChatMixin & this {
		return true;
	}
}
