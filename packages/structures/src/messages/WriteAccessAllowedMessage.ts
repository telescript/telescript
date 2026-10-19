import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class WriteAccessAllowedMessage extends BaseMessage<MessageType.WriteAccessAllowed> {
	public get writeAccessAllowed(): Resolve<'WriteAccessAllowed'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'WriteAccessAllowed',
			this[Structure.DataProperty].write_access_allowed,
		);
	}

	public get type(): MessageType.WriteAccessAllowed {
		return MessageType.WriteAccessAllowed;
	}

	public isWriteAccessAllowed(): this is Resolve<'WriteAccessAllowedMessage'> {
		return true;
	}
}
