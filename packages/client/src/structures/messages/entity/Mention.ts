import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { MentionMessageEntity as ParentMentionMessageEntity } from '@telescript/structures';

export interface MentionMessageEntity extends ParentMentionMessageEntity {}

export class MentionMessageEntity extends BaseMessageEntity<MessageEntityType.Mention> {
	static {
		this.mixin(ParentMentionMessageEntity);
	}
}
