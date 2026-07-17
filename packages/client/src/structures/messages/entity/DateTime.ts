import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { DateTimeMessageEntity as ParentDateTimeMessageEntity } from '@telescript/structures';

export interface DateTimeMessageEntity extends ParentDateTimeMessageEntity {}

export class DateTimeMessageEntity extends BaseMessageEntity<MessageEntityType.DateTime> {
	static {
		this.mixin(ParentDateTimeMessageEntity);
	}
}
