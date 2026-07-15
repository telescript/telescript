import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class BoldMessageEntity extends BaseMessageEntity<MessageEntityType.Bold> {
	public isBold(): this is BoldMessageEntity {
		return true;
	}
}
