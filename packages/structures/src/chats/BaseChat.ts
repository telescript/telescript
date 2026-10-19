import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { TitleableChatMixin } from './mixins/TitleableChatMixin.js';
import { UsernameableChatMixin } from './mixins/UsernameableChatMixin.js';
import type { Resolve } from '../registry.js';

export class BaseChat<
	Type extends ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends Structure<Data> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isChannel(): this is Resolve<'ChannelChat'> {
		return false;
	}

	public isGroup(): this is Resolve<'GroupChat'> {
		return false;
	}

	public isPrivate(): this is Resolve<'PrivateChat'> {
		return false;
	}

	public isSupergroup(): this is Resolve<'SupergroupChat'> {
		return false;
	}

	public isTitleable(): this is TitleableChatMixin {
		return false;
	}

	public isUsernameable(): this is UsernameableChatMixin {
		return false;
	}
}
