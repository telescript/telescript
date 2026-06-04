import { APIMessageOrigin, MessageOriginType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { UserMessageOrigin } from './UserMessageOrigin.js';
import { HiddenUserMessageOrigin } from './HiddenUserMessageOrigin.js';
import { ChatMessageOrigin } from './ChatMessageOrigin.js';
import { ChannelMessageOrigin } from './ChannelMessageOrigin.js';

export class BaseMessageOrigin<
	Type extends MessageOriginType = MessageOriginType,
	Data extends APIMessageOrigin.FromType<Type> = APIMessageOrigin.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get sentUnixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get sentTimestamp() {
		return this.sentUnixTimestamp * 1000;
	}

	public get sentDate() {
		return new Date(this.sentTimestamp);
	}

	public isUser(): this is UserMessageOrigin {
		return false;
	}

	public isHiddenUser(): this is HiddenUserMessageOrigin {
		return false;
	}

	public isChat(): this is ChatMessageOrigin {
		return false;
	}

	public isChannel(): this is ChannelMessageOrigin {
		return false;
	}
}
