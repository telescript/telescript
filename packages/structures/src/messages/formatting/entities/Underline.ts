import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class UnderlineMessageEntity extends BaseMessageEntity<MessageEntityType.Underline> {
	public isUnderline(): this is Resolve<'UnderlineMessageEntity'> {
		return true;
	}
}
