import { Community as ParentCommunity } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APICommunity } from '@telescript/api-types';

export class Community extends ParentCommunity {
	public constructor(
		public client: Client,
		data: APICommunity,
	) {
		super(data);
	}
}
