import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { Structure } from '../../Structure.js';

export class HiddenUserMessageOrigin extends BaseMessageOrigin<MessageOriginType.HiddenUser> {
	public get senderUserName() {
		return this[Structure.DataProperty].sender_user_name;
	}

	public isHiddenUser(): this is HiddenUserMessageOrigin {
		return true;
	}
}
