import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { PreMessageEntity as ParentPreMessageEntity } from '@telescript/structures';

export interface PreMessageEntity extends ParentPreMessageEntity {}

export class PreMessageEntity extends BaseMessageEntity<MessageEntityType.Pre> {
	static {
		this.mixin(ParentPreMessageEntity);
	}
}
