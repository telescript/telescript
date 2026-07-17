import { APIForumTopicCreated } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ForumTopicCreated extends Structure<APIForumTopicCreated> {
	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get iconColor() {
		return this[Structure.DataProperty].icon_color;
	}

	public get iconCustomEmojiId() {
		return this[Structure.DataProperty].icon_custom_emoji_id ?? null;
	}

	public get isNameImplicit() {
		return this[Structure.DataProperty].is_name_implicit ?? false;
	}
}
