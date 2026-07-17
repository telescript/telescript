import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { BoldMessageEntity as ParentBoldMessageEntity } from '@telescript/structures';

export interface BoldMessageEntity extends ParentBoldMessageEntity {}

export class BoldMessageEntity extends BaseMessageEntity<MessageEntityType.Bold> {
	static {
		this.mixin(ParentBoldMessageEntity);
	}
}
