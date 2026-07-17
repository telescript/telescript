import { CommunityChatRemoved as ParentCommunityChatRemoved } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APICommunityChatRemoved } from '@telescript/api-types';

export interface CommunityChatRemoved extends ParentCommunityChatRemoved {}

export class CommunityChatRemoved extends ParentCommunityChatRemoved {
	public constructor(
		public client: Client,
		data: APICommunityChatRemoved,
	) {
		super(data);
	}
}
