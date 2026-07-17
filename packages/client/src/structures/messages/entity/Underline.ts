import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { UnderlineMessageEntity as ParentUnderlineMessageEntity } from '@telescript/structures';

export interface UnderlineMessageEntity extends ParentUnderlineMessageEntity {}

export class UnderlineMessageEntity extends BaseMessageEntity<MessageEntityType.Underline> {
	static {
		this.mixin(ParentUnderlineMessageEntity);
	}
}
