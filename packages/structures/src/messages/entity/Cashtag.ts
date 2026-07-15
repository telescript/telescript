import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class CashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Cashtag> {
	public isCashtag(): this is CashtagMessageEntity {
		return true;
	}
}
