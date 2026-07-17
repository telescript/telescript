import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { CashtagMessageEntity as ParentCashtagMessageEntity } from '@telescript/structures';

export interface CashtagMessageEntity extends ParentCashtagMessageEntity {}

export class CashtagMessageEntity extends BaseMessageEntity<MessageEntityType.Cashtag> {
	static {
		this.mixin(ParentCashtagMessageEntity);
	}
}
