import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { UserMessageOrigin as ParentUserMessageOrigin, Structure } from '@telescript/structures';

export interface UserMessageOrigin extends ParentUserMessageOrigin {}

export class UserMessageOrigin extends BaseMessageOrigin<MessageOriginType.User> {
	static {
		this.mixin(ParentUserMessageOrigin);
	}

	public get senderUser() {
		return this.client.users.resolve(this[Structure.DataProperty].sender_user);
	}
}
