import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class UsersSharedMessage extends BaseMessage<MessageType.UsersShared> {
	public get usersShared(): Resolve<'UsersShared'> {
		return createStructure(this[Structure.OwnerProperty], 'UsersShared', this[Structure.DataProperty].users_shared);
	}

	public get type(): MessageType.UsersShared {
		return MessageType.UsersShared;
	}

	public isUsersShared(): this is Resolve<'UsersSharedMessage'> {
		return true;
	}
}
