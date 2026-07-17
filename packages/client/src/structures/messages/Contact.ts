import { Contact as ParentContact } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIContact } from '@telescript/api-types';

export interface Contact extends ParentContact {}

export class Contact extends ParentContact {
	public constructor(
		public client: Client,
		data: APIContact,
	) {
		super(data);
	}
}
