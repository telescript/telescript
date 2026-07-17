import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { StrikethroughMessageEntity as ParentStrikethroughMessageEntity } from '@telescript/structures';

export interface StrikethroughMessageEntity extends ParentStrikethroughMessageEntity {}

export class StrikethroughMessageEntity extends BaseMessageEntity<MessageEntityType.Strikethrough> {
	static {
		this.mixin(ParentStrikethroughMessageEntity);
	}
}
