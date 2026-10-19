import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class CashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Cashtag> {
	public isCashtag(): this is Resolve<'CashtagMessageEntity'> {
		return true;
	}
}
