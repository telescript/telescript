import { Story as ParentStory, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIStory } from '@telescript/api-types';

export interface Story extends ParentStory {}

export class Story extends ParentStory {
	public constructor(
		public client: Client,
		data: APIStory,
	) {
		super(data);
	}

	public get chat() {
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}
}
