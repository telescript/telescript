import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { EmailMessageEntity as ParentEmailMessageEntity } from '@telescript/structures';

export interface EmailMessageEntity extends ParentEmailMessageEntity {}

export class EmailMessageEntity extends BaseMessageEntity<MessageEntityType.Email> {
	static {
		this.mixin(ParentEmailMessageEntity);
	}
}
