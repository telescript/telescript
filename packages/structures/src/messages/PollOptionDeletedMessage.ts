import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class PollOptionDeletedMessage extends BaseMessage<MessageType.PollOptionDeleted> {
	public get pollOptionDeleted(): Resolve<'PollOptionDeleted'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'PollOptionDeleted',
			this[Structure.DataProperty].poll_option_deleted,
		);
	}

	public get type(): MessageType.PollOptionDeleted {
		return MessageType.PollOptionDeleted;
	}

	public isPollOptionDeleted(): this is Resolve<'PollOptionDeletedMessage'> {
		return true;
	}
}
