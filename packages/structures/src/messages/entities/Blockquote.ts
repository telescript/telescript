import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class BlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.Blockquote> {
	public isBlockquote(): this is BlockquoteMessageEntity {
		return true;
	}
}
