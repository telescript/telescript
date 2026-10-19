import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class HashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Hashtag> {
	public isHashtag(): this is Resolve<'HashtagMessageEntity'> {
		return true;
	}
}
