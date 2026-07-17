import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { HashtagMessageEntity as ParentHashtagMessageEntity } from '@telescript/structures';

export interface HashtagMessageEntity extends ParentHashtagMessageEntity {}

export class HashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Hashtag> {
	static {
		this.mixin(ParentHashtagMessageEntity);
	}
}
