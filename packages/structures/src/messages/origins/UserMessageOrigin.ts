import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './BaseMessageOrigin.js';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class UserMessageOrigin extends BaseMessageOrigin<MessageOriginType.User> {
	public get senderUser(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].sender_user);
	}

	public isUser(): this is Resolve<'UserMessageOrigin'> {
		return true;
	}
}
