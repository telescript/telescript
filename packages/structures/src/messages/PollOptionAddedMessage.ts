import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class PollOptionAddedMessage extends BaseMessage<MessageType.PollOptionAdded> {
	public get pollOptionAdded(): Resolve<'PollOptionAdded'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'PollOptionAdded',
			this[Structure.DataProperty].poll_option_added,
		);
	}

	public get type(): MessageType.PollOptionAdded {
		return MessageType.PollOptionAdded;
	}

	public isPollOptionAdded(): this is Resolve<'PollOptionAddedMessage'> {
		return true;
	}
}
