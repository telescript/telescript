import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { ExpandableBlockquoteMessageEntity as ParentExpandableBlockquoteMessageEntity } from '@telescript/structures';

export interface ExpandableBlockquoteMessageEntity extends ParentExpandableBlockquoteMessageEntity {}

export class ExpandableBlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.ExpandableBlockquote> {
	static {
		this.mixin(ParentExpandableBlockquoteMessageEntity);
	}
}
