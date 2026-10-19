import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class PollMessage extends BaseMessage<MessageType.Poll> {
	public get poll(): Resolve<'Poll'> {
		return createStructure(this[Structure.OwnerProperty], 'Poll', this[Structure.DataProperty].poll);
	}

	public get type(): MessageType.Poll {
		return MessageType.Poll;
	}

	public isPoll(): this is Resolve<'PollMessage'> {
		return true;
	}
}
