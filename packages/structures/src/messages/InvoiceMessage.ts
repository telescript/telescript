import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class InvoiceMessage extends BaseMessage<MessageType.Invoice> {
	public get invoice(): Resolve<'Invoice'> {
		return createStructure(this[Structure.OwnerProperty], 'Invoice', this[Structure.DataProperty].invoice);
	}

	public get type(): MessageType.Invoice {
		return MessageType.Invoice;
	}

	public isInvoice(): this is Resolve<'InvoiceMessage'> {
		return true;
	}
}
