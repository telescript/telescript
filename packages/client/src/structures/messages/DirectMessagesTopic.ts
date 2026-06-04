import { DirectMessagesTopic as ParentDirectMessagesTopic } from '@telescript/structures';
import { Client } from '../../client';
import { APIDirectMessagesTopic } from '@telescript/api-types';

export class DirectMessagesTopic extends ParentDirectMessagesTopic {
	public constructor(
		public client: Client,
		data: APIDirectMessagesTopic,
	) {
		super(data);
	}
}
