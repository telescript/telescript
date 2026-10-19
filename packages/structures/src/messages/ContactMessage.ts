import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ContactMessage extends BaseMessage<MessageType.Contact> {
	public get contact(): Resolve<'Contact'> {
		return createStructure(this[Structure.OwnerProperty], 'Contact', this[Structure.DataProperty].contact);
	}

	public get type(): MessageType.Contact {
		return MessageType.Contact;
	}

	public isContact(): this is Resolve<'ContactMessage'> {
		return true;
	}
}
