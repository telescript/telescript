import { Invoice as ParentInvoice } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIInvoice } from '@telescript/api-types';

export interface Invoice extends ParentInvoice {}

export class Invoice extends ParentInvoice {
	public constructor(
		public client: Client,
		data: APIInvoice,
	) {
		super(data);
	}
}
