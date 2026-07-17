import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class SpoilerMessageEntity extends BaseMessageEntity<MessageEntityType.Spoiler> {
	public isSpoiler(): this is SpoilerMessageEntity {
		return true;
	}
}
