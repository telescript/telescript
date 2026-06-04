import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { User } from '../../users/User.js';
import { Structure } from '../../Structure.js';

export class UserMessageOrigin extends BaseMessageOrigin<MessageOriginType.User> {
	public get senderUser() {
		return new User(this[Structure.DataProperty].sender_user);
	}

	public isUser(): this is UserMessageOrigin {
		return true;
	}
}
