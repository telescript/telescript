import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class HashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Hashtag> {
	public isHashtag(): this is HashtagMessageEntity {
		return true;
	}
}
