import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { BlockquoteMessageEntity as ParentBlockquoteMessageEntity } from '@telescript/structures';

export interface BlockquoteMessageEntity extends ParentBlockquoteMessageEntity {}

export class BlockquoteMessageEntity extends BaseMessageEntity<MessageEntityType.Blockquote> {
	static {
		this.mixin(ParentBlockquoteMessageEntity);
	}
}
