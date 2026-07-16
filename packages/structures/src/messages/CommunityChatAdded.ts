import { APICommunityChatAdded } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Community } from '../chats/Community.js';

export class CommunityChatAdded extends Structure<APICommunityChatAdded> {
	public get community() {
		return new Community(this[Structure.DataProperty].community);
	}
}
