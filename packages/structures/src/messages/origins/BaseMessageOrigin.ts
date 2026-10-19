import { APIMessageOrigin, MessageOriginType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import type { Resolve } from '../../registry.js';

export class BaseMessageOrigin<
	Type extends MessageOriginType,
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

	public isUser(): this is Resolve<'UserMessageOrigin'> {
		return false;
	}

	public isHiddenUser(): this is Resolve<'HiddenUserMessageOrigin'> {
		return false;
	}

	public isChat(): this is Resolve<'ChatMessageOrigin'> {
		return false;
	}

	public isChannel(): this is Resolve<'ChannelMessageOrigin'> {
		return false;
	}
}
