import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class BoldMessageEntity extends BaseMessageEntity<MessageEntityType.Bold> {
	public isBold(): this is Resolve<'BoldMessageEntity'> {
		return true;
	}
}
