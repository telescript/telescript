import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class BlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.Blockquote> {
	public isBlockquote(): this is Resolve<'BlockquoteMessageEntity'> {
		return true;
	}
}
