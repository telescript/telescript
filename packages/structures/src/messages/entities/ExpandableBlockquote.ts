import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class ExpandableBlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.ExpandableBlockquote> {
	public isExpandableBlockquote(): this is ExpandableBlockquoteMessageEntity {
		return true;
	}
}
