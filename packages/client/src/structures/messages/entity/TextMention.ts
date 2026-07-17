import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { TextMentionMessageEntity as ParentTextMentionMessageEntity, Structure } from '@telescript/structures';

export interface TextMentionMessageEntity extends ParentTextMentionMessageEntity {}

export class TextMentionMessageEntity extends BaseMessageEntity<MessageEntityType.TextMention> {
	static {
		this.mixin(ParentTextMentionMessageEntity);
	}

	public get user() {
		return this.client.users.resolve(this[Structure.DataProperty].user);
	}
}
