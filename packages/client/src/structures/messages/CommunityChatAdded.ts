import { CommunityChatAdded as ParentCommunityChatAdded, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APICommunityChatAdded } from '@telescript/api-types';
import { Community } from '../chats/Community.js';

export interface CommunityChatAdded extends ParentCommunityChatAdded {}

export class CommunityChatAdded extends ParentCommunityChatAdded {
	public constructor(
		public client: Client,
		data: APICommunityChatAdded,
	) {
		super(data);
	}

	public get community() {
		return new Community(this.client, this[Structure.DataProperty].community);
	}
}
