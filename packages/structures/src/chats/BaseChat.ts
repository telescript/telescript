import { APIChat, ChatType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';
import { TitleableChatMixin } from './mixins/TitleableChatMixin.js';
import { UsernameableChatMixin } from './mixins/UsernameableChatMixin.js';

export class BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends Structure<Data> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isChannel(): this is ChannelChat {
		return false;
	}

	public isGroup(): this is GroupChat {
		return false;
	}

	public isPrivate(): this is PrivateChat {
		return false;
	}

	public isSupergroup(): this is SupergroupChat {
		return false;
	}

	public isTitleable(): this is TitleableChatMixin {
		return false;
	}

	public isUsernameable(): this is UsernameableChatMixin {
		return false;
	}
}
