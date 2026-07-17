import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class StrikethroughMessageEntity extends BaseMessageEntity<MessageEntityType.Strikethrough> {
	public isStrikethrough(): this is StrikethroughMessageEntity {
		return true;
	}
}
