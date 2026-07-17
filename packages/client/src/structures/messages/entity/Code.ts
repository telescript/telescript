import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { CodeMessageEntity as ParentCodeMessageEntity } from '@telescript/structures';

export interface CodeMessageEntity extends ParentCodeMessageEntity {}

export class CodeMessageEntity extends BaseMessageEntity<MessageEntityType.Code> {
	static {
		this.mixin(ParentCodeMessageEntity);
	}
}
