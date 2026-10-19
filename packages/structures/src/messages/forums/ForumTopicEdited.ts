import { APIForumTopicEdited } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ForumTopicEdited extends Structure<APIForumTopicEdited> {
	public get name() {
		return this[Structure.DataProperty].name ?? null;
	}

	public get iconCustomEmojiId() {
		return this[Structure.DataProperty].icon_custom_emoji_id ?? null;
	}
}
