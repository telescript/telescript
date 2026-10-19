import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { createMaybeInaccessibleMessage } from './createMaybeInaccessibleMessage.js';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class PinnedMessage extends BaseMessage<MessageType.Pinned> {
	public get pinnedMessage() {
		return createMaybeInaccessibleMessage(this[Structure.DataProperty].pinned_message, this[Structure.OwnerProperty]);
	}

	public get type(): MessageType.Pinned {
		return MessageType.Pinned;
	}

	public isPinned(): this is Resolve<'PinnedMessage'> {
		return true;
	}
}
