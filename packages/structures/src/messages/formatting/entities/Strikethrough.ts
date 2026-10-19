import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class StrikethroughMessageEntity extends BaseMessageEntity<MessageEntityType.Strikethrough> {
	public isStrikethrough(): this is Resolve<'StrikethroughMessageEntity'> {
		return true;
	}
}
