import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class EmailMessageEntity extends BaseMessageEntity<MessageEntityType.Email> {
	public isEmail(): this is Resolve<'EmailMessageEntity'> {
		return true;
	}
}
