import { APIStory } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class Story extends Structure<APIStory> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat);
	}

	public get id() {
		return this[Structure.DataProperty].id;
	}
}
