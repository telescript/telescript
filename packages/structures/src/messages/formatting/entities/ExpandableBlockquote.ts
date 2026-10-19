import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class ExpandableBlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.ExpandableBlockquote> {
	public isExpandableBlockquote(): this is Resolve<'ExpandableBlockquoteMessageEntity'> {
		return true;
	}
}
