import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './BaseMessageOrigin.js';
import { Structure } from '../../Structure.js';
import type { Resolve } from '../../registry.js';

export class HiddenUserMessageOrigin extends BaseMessageOrigin<MessageOriginType.HiddenUser> {
	public get senderUserName() {
		return this[Structure.DataProperty].sender_user_name;
	}

	public isHiddenUser(): this is Resolve<'HiddenUserMessageOrigin'> {
		return true;
	}
}
