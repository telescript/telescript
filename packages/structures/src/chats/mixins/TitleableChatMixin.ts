import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseChat } from '../BaseChat.js';

export interface TitleableChatMixin<
	Type extends ChatType.Titleable = ChatType.Titleable,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends BaseChat<Type, Data> {}

export class TitleableChatMixin {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public isTitleable(): this is TitleableChatMixin {
		return true;
	}
}
