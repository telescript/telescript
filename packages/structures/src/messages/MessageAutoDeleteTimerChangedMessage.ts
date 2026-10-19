import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class MessageAutoDeleteTimerChangedMessage extends BaseMessage<MessageType.MessageAutoDeleteTimerChanged> {
	public get messageAutoDeleteTimerChanged(): Resolve<'MessageAutoDeleteTimerChanged'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'MessageAutoDeleteTimerChanged',
			this[Structure.DataProperty].message_auto_delete_timer_changed,
		);
	}

	public get type(): MessageType.MessageAutoDeleteTimerChanged {
		return MessageType.MessageAutoDeleteTimerChanged;
	}

	public isMessageAutoDeleteTimerChanged(): this is Resolve<'MessageAutoDeleteTimerChangedMessage'> {
		return true;
	}
}
